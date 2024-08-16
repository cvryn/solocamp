from flask import Blueprint, request
from flask_login import current_user
from app.models import AlbumArt, db, Album
from app.forms import AlbumArtForm


album_art_routes = Blueprint("album-art", __name__)


@album_art_routes.route("/", methods=["GET"])
def album_art_all():
    arts = AlbumArt.query.all()
    return [art.to_dict() for art in arts]

@album_art_routes.route("/<int:album_id>", methods=["POST"])
def create_album_art(album_id):
    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    album = Album.query.get(album_id)
    if album is None:
        return {"error": "Album not found"}, 404

    form = AlbumArtForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_album_art = AlbumArt(
            album_art=form.data['album_art'],
            album_banner=form.data['album_banner'],
            background_color=form.data['background_color'],
            album_id=album_id
        )

        db.session.add(new_album_art)
        db.session.commit()
        return new_album_art.to_dict(), 201

    return {"errors": form.errors}, 400



@album_art_routes.route("<int:album_art_id>", methods=["GET", "PUT", "DELETE"])
def album_art_get(album_art_id):
    album_art = AlbumArt.query.filter_by(id=album_art_id).first()

    if album_art is None:
        return {"error": "Album art not found"}, 404

    if request.method == "PUT":
        form = AlbumArtForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        album = album_art.album
        if album.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        if form.validate_on_submit():
            data = request.json
            album_art.album_art = data.get("album_art", album_art.album_art)
            album_art.album_banner = data.get("album_banner", album_art.album_banner)
            album_art.background_color = data.get(
                "background_color", album_art.background_color
            )

            db.session.commit()
            return album_art.to_dict(), 200

        return {"errors": form.errors}, 400

    elif request.method == "DELETE":

        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        if album_art is None:
            return {"error": "Album art not found"}, 404

        album = album_art.album
        if album.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        db.session.delete(album_art)
        db.session.commit()
        return {"message": "Album art deleted"}, 200

    else:
        return album_art.to_dict()
