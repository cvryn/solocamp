from flask import Blueprint, request
from app.models import db, SupportedBy, Album, Song
from app.forms import SupportedByForm
from flask_login import login_required, current_user

supported_by_routes = Blueprint("supported_bys", __name__)


# GET ALL supported_bys
@supported_by_routes.route("/all", methods=["GET"])
def all_supported_bys():
    supported_bys = SupportedBy.query.all()
    return [supported_by.to_dict() for supported_by in supported_bys], 200


# GET Supported_Bys by Album Id
@supported_by_routes.route("/album/<int:album_id>", methods=["GET"])
def get_supported_bys_by_album(album_id):
    supported_bys = SupportedBy.query.filter_by(album_id=album_id).all()
    return [supported_by.to_dict() for supported_by in supported_bys], 200


# POST new supported by
@supported_by_routes.route("/<int:album_id>", methods=["POST"])
def post_supported_bys(album_id):
    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    album = Album.query.get(album_id)
    if album is None:
        return {"error": "Album not found"}, 404

    if album.user_id == current_user.id:
        return {"error": "Cannot leave a supported by on your own album"}, 403

    data = request.get_json()
    description = data.get("description")
    song_id = data.get("song_id", None)


    if song_id:
        song_exists = Song.query.filter_by(id=song_id).first()
        if song_exists is None:
            return {"error": "Song not found"}, 404
        # Check that the song belongs to the specified album
        song_in_album = Song.query.filter_by(id=song_id, album_id=album_id).first()
        if song_in_album is None:
            return {"error": "Song not found in album"}, 404


    existing_review = SupportedBy.query.filter_by(user_id=current_user.id, album_id=album_id).first()
    if existing_review:
        return {"error": "You cannot leave more than one review on an album!"}, 409

    new_supported_by = SupportedBy(
        description=description,
        album_id=album_id,
        song_id=song_id,
        user_id=current_user.id,
    )

    db.session.add(new_supported_by)
    db.session.commit()

    return new_supported_by.to_dict(), 201


# Edit Supported_By by supported_by_id
@supported_by_routes.route("/<int:supported_by_id>", methods=["PUT"])
def edit_supported_by(supported_by_id):
    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    supported_by = SupportedBy.query.get(supported_by_id)

    if supported_by is None:
        return {"error": "Supported by not found"}, 404

    if supported_by.user_id != current_user.id:
        return {"error": "Forbidden"}, 403

    data = request.get_json()
    description = data.get("description")
    song_id = data.get("song_id")

    # Update supported_by attributes
    supported_by.description = description
    supported_by.song_id = int(song_id) if song_id else None

    db.session.commit()
    return supported_by.to_dict(), 200


# Delete supported_By by supported_by supported_by_id
@supported_by_routes.route("/<int:supported_by_id>", methods=["DELETE"])
# @login_required
def delete_supported_By(supported_by_id):
    supported_by = SupportedBy.query.get(supported_by_id)

    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    # Check if exists
    if supported_by is None:
        return {"error": "Supported by not found"}, 404

    # Can only delete if it belongs to the user
    if supported_by.user_id != current_user.id:
        return {"error": "Forbidden"}, 403

    db.session.delete(supported_by)
    db.session.commit()

    return {"message": "Supported By deleted successfully"}, 200
