from flask import Blueprint, request
from flask_login import current_user
from app.models import AlbumArt, db
from app.forms import AlbumArtForm


albumart_routes = Blueprint("album-art", __name__)


@albumart_routes.route("/", methods=["GET"])
def albumart_all():
    arts = AlbumArt.query.all()
    return [art.to_dict() for art in arts]


@albumart_routes.route("<int:album_art_id>", methods=["GET", "PUT", "DELETE"])
def albumart_get(album_art_id):
    albumart = AlbumArt.query.filter_by(id=album_art_id).first()

    if albumart is None:
        return {"error": "Album art not found"}, 404

    if request.method == "PUT":
        form = AlbumArtForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        album = albumart.album
        if album.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        if form.validate_on_submit():
            data = request.json
            albumart.album_art = data.get("album_art", albumart.album_art)
            albumart.album_banner = data.get("album_banner", albumart.album_banner)
            albumart.background_color = data.get(
                "background_color", albumart.background_color
            )

            db.session.commit()
            return albumart.to_dict(), 200

        return {"errors": form.errors}, 400

    elif request.method == "DELETE":

        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        if albumart is None:
            return {"error": "Album art not found"}, 404

        album = albumart.album
        if album.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        db.session.delete(albumart)
        db.session.commit()
        return {"message": "Album art deleted"}, 200

    else:
        return albumart.to_dict()
