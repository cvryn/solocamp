from flask import Blueprint, request
from flask_login import current_user
from app.models import Album, AlbumArt, Song, db
from app.forms import AlbumForm, AlbumArtForm, SongForm


album_routes = Blueprint("albums", __name__)


# get all albums
# create album beloning to current user
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


# get album by id
# edit album by id beloning to current user
# delete album by id beloning to current user
@album_routes.route("/<int:album_id>", methods=["GET", "PUT", "DELETE"])
def album_detail(album_id):
    album = Album.query.get(album_id)

    if request.method == "PUT":
        form = AlbumForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        if album is None:
            return {"error": "Album not found"}, 404

        if album.user_id != current_user.id:
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

        if album is None:
            return {"error": "Album not found"}, 404

        if album.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        db.session.delete(album)
        db.session.commit()
        return {"message": "Album deleted"}, 200

    else:
        if album is None:
            return {"error": "Album not found"}, 404

        return album.to_dict(), 200


# add album art to album belonging to current user
@album_routes.route("/<int:album_id>/album-art", methods=["POST"])
def albumart_post(album_id):
    album = Album.query.get(album_id)
    form = AlbumArtForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    if album is None:
        return {"error": "Album not found"}, 404

    if current_user.id != album.user_id:
        return {"error": "Forbidden"}, 403

    existing_albumart = AlbumArt.query.filter_by(album_id=album_id).first()
    if existing_albumart:
        return {"error": "Album art already exists"}

    if form.validate_on_submit():
        new_albumart = AlbumArt(
            album_id=album_id,
            album_art=form.data["album_art"],
            album_banner=form.data["album_banner"],
            background_color=form.data["background_color"],
        )

        db.session.add(new_albumart)
        db.session.commit()
        return new_albumart.to_dict(), 201

    return {"errors": form.errors}, 400


# get all songs by album
# add song to album beloning to current user
@album_routes.route("/<int:album_id>/song", methods=["GET", "POST"])
def songs(album_id):
    album = Album.query.get(album_id)

    if album is None:
        return {"error": "Album not found"}

    if request.method == "POST":
        form = SongForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        if album.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        if form.validate_on_submit():
            new_song = Song(
                title=form.data["title"],
                track_number=form.data["track_number"],
                song_url=form.data["song_url"],
                album_id=album_id,
                user_id=current_user.id,
            )

            db.session.add(new_song)
            db.session.commit()
            return new_song.to_dict(), 201

    else:
        songs = Song.query.filter_by(album_id=album_id).all()
        return [song.to_dict() for song in songs], 200


# add album to wishlist belonging to current user
@album_routes.route("/<int:album_id>/wishlist", methods=["POST"])
def add_to_wishlist(album_id):
    album = Album.query.get(album_id)

    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    if album is None:
        return {"error": "Album not found"}, 404

    if album.user_id == current_user.id:
        return {"error": "Forbidden"}, 403

    if album in current_user.album:
        return {"error": "Album already in wishlist"}, 409

    current_user.album.append(album)
    db.session.commit()
    return {"message": "Album added to wishlist"}, 201
