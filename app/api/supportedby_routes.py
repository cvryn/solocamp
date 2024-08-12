from flask import Blueprint, request
from app.models import db, SupportedBy, Album
from app.forms import SupportedByForm
from flask_login import login_required, current_user

supportedby_routes = Blueprint("supported_bys", __name__)


# Get ALL supportedbys by albums
@supportedby_routes.route("/<int:album_id>/supportedbys", methods=["GET"])
def all_supported_bys(album_id):
    albums = Album.query.get(album_id)
    if albums is None:
        return {"error": "album not found"}
    supported_bys = SupportedBy.query.filter(album_id == album_id).all()

    return [supported_by.to_dict() for supported_by in supported_bys], 200


# GET SupportedBys by Album Id
@supportedby_routes.route("/<int:supportedby_id>", methods=["GET"])
@login_required
def supported_bys_album_id(supportedby_id):
    supported_bys = SupportedBy.query.filter_by(id=supportedby_id).all()
    results = []

    for sb in supported_bys:

        new_sb = {
            "id": sb.id,
            "description": sb.description,
            "album_id": sb.album_id,
            "user_id": sb.user_id,
            "created_at": sb.created_at.isoformat(),
        }

        results.append(new_sb)
        return results


# POST Edit existing supportedby
@supportedby_routes.route("/<int:album_id>", methods=["POST"])
@login_required
def post_supported_bys(album_id):
    album = Album.query.get(album_id)
    form = SupportedByForm()

    form.csrf_token.data = request.cookies.get("csrf_token")

    if album.user_id == current_user.id:
        return {"error": "Cannot leave a supported by on your own album"}, 403

    supportedby_exists = SupportedBy.query.filter(current_user.id == SupportedBy.user_id)
    # if supportedby_exists:
    #     return {"error": "You cannot leave more than one supported by on an album!"}, 409
    if form.validate_on_submit():

        new_supportedby = SupportedBy(
            description=form.data["description"],
            album_id=album_id,
            user_id=current_user.id,
        )

        db.session.add(new_supportedby)
        db.session.commit()

        return new_supportedby.to_dict(), 201

    return {"errors": form.errors}, 400


# Edit SupportedBy by supportedby_id
@supportedby_routes.route("/<int:supportedby_id>", methods=["PUT"])
@login_required
def edit_supported_by(supportedby_id):

    supported_by = SupportedBy.query.get(supportedby_id)
    print('FSDFLSKDFJKLSDF', supported_by)

    form = SupportedByForm()
    form.csrf_token.data = request.cookies.get("csrf_token")

    # Check if supported by exists
    if supported_by is None:
        return {"error": "Supported by not found"}, 404

    # Check if current user owns this supportedby
    if supported_by.user_id != current_user.id:
        return {"error": "Forbidden"}, 403

    if form.validate_on_submit():

        # Update
        supported_by.description = form.data["description"]

        db.session.commit()

        return supported_by.to_dict(), 200

    return {"errors": form.errors}, 400


# Delete supportedBy by supportedby supportedby_id
@supportedby_routes.route("/<int:supportedby_id>", methods=["DELETE"])
@login_required
def delete_supportedBy(supportedby_id):
    supported_by = SupportedBy.query.get(supportedby_id)

    # Check if exists
    if supported_by is None:
        return {"error": "Supported by not found"}, 404

    # Can only delete if it belongs to the user
    if supported_by.user_id != current_user.id:
        return {"error": "Forbidden"}, 403

    db.session.delete(supported_by)
    db.session.commit()

    return {"message": "SupportedBy deleted successfully"}, 200
