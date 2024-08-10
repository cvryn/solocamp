from flask import Blueprint, request
from flask_login import current_user
from app.models import Album, db
from app.forms import AlbumForm


album_routes = Blueprint("albums", __name__)


@album_routes.route("/", methods=["GET", "POST"])
def albums():
    if request.method == "POST":
        form = AlbumForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        if form.validate_on_submit():
            new_album = Album(
                name=form.data["name"],
                user_id=current_user.id,
                year=form.data["year"],
                genre=form.data["genre"],
                price=form.data["price"],
                description=form.data["description"],
            )

            db.session.add(new_album)
            db.session.commit()
            return new_album.to_dict(), 201

        return {"errors": form.errors}, 400

    else:
        albums = Album.query.all()
        return [album.to_dict() for album in albums], 200


@album_routes.route("/<int:album_id>", methods=["GET", "PUT", "DELETE"])
def album_detail(album_id):
    album = Album.query.get(album_id)

    if request.method == "PUT":
        form = AlbumForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        elif album is None:
            return {"error": "Album not found"}, 404

        elif album.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        if form.validate_on_submit():
            data = request.json
            album.name = data.get("name", album.name)
            album.year = data.get("year", album.year)
            album.genre = data.get("genre", album.genre)
            album.price = data.get("price", album.price)
            album.description = data.get("description", album.description)

            db.session.commit()
            return album.to_dict(), 200

        return {"errors": form.errors}, 400

    elif request.method == "DELETE":
        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        elif album is None:
            return {"error": "Album not found"}, 404

        elif album.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        db.session.delete(album)
        db.session.commit()
        return {"message": "Album deleted"}, 200

    else:
        if album is None:
            return {"error": "Album not found"}, 404

        return album.to_dict(), 200
