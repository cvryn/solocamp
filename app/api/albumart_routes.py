from flask import Blueprint, request
from flask_login import current_user
from app.models import AlbumArt, db
from app.forms import AlbumArtForm


albumart_routes = Blueprint("album-art", __name__)


@albumart_routes.route("/", methods=["GET"])
def albumart_all():
    arts = AlbumArt.query.all()
    return [art.to_dict() for art in arts]


@albumart_routes.route("/<int:album_id>", methods=["GET", "PUT", "DELETE"])
def albumart_get(album_id):
    albumart = AlbumArt.query.filter_by(album_id=album_id).first()

    if albumart is None:
        return {"error": "Album art not found"}, 404

    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    elif request.method == "GET":
        return albumart.to_dict()

    elif request.method == "PUT":
        form = AlbumArtForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

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
        db.session.delete(albumart)
        db.session.commit()
        return {"message": "Album art deleted"}, 200


@albumart_routes.route("/<int:album_id>", methods=["POST"])
def albumart_post(album_id):
    form = AlbumArtForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    if form.validate_on_submit():
        new_albumart = AlbumArt(
            album_id=album_id,
            album_art=form.data["album_art"],
            album_banner=form.data["album_banner"],
            background_color=form.data["background_color"],
        )

        db.session.add(new_albumart)
        db.session.commit()
        return new_albumart.to_dict()

    return {"errors": form.errors}, 400
