from flask import Blueprint, request, jsonify
from flask_login import current_user
from app.models import Album, AlbumArt, Song, SupportedBy, db
from app.forms import AlbumForm, AlbumArtForm, SongForm, SupportedByForm


album_routes = Blueprint("albums", __name__)


# get all albums
# create album belonging to current user
@album_routes.route("/all", methods=["GET", "POST"])
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
        # print('form error in backend', form.errors)
        # return {"errors": form.errors}, 400
        else:
            errors = {}
            for field, field_errors in form.errors.items():
                errors[field] = field_errors
            return jsonify(errors), 400

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

        data = request.json
        print("DATA!!!!", data)
        print(data.get("name", album.name))
        print(data.get("year", album.year))
        print(data.get("name", album.name))
        print(data.get("name", album.name))
        if form.validate_on_submit():
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
def album_art_post(album_id):
    album = Album.query.get(album_id)
    form = AlbumArtForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    if album is None:
        return {"error": "Album not found"}, 404

    if current_user.id != album.user_id:
        return {"error": "Forbidden"}, 403

    existing_album_art = AlbumArt.query.filter_by(album_id=album_id).first()
    if existing_album_art:
        return {"error": "Album art already exists"}

    if form.validate_on_submit():
        new_album_art = AlbumArt(
            album_id=album_id,
            album_art=form.data["album_art"],
            album_banner=form.data["album_banner"],
            background_color=form.data["background_color"],
        )

        db.session.add(new_album_art)
        db.session.commit()
        return new_album_art.to_dict(), 201

    return {"errors": form.errors}, 400


# get all songs by album
# add song to album beloning to current user
@album_routes.route("/<int:album_id>/song", methods=["GET", "POST",'DELETE'])
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

    elif request.method == "DELETE":
        song_id = request.json.get("song_id")
        song = Song.query.get(song_id)

        if song is None or song.album_id != album_id:
            return {"error": "Song not found in this album"}, 404

        if song.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        db.session.delete(song)
        db.session.commit()
        return {"message": "Song deleted successfully"}, 200

    else:
        songs = Song.query.filter_by(album_id=album_id).all()
        return [song.to_dict() for song in songs], 200


# Get ALL supportedbys by albums
@album_routes.route("/<int:album_id>/supported-bys", methods=["GET"])
def supported_bys_by_album(album_id):
    album = Album.query.get(album_id)

    if album is None:
        return {"error": "album not found"}, 404

    supported_bys = SupportedBy.query.filter_by(album_id=album_id).all()
    return [supported_by.to_dict() for supported_by in supported_bys], 200


# POST post new supportedby
@album_routes.route("/<int:album_id>/supported-bys", methods=["POST"])
def post_supported_bys(album_id):
    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    album = Album.query.get(album_id)
    form = SupportedByForm()

    form.csrf_token.data = request.cookies.get("csrf_token")

    if album is None:
        return {"error": "Album not found"}, 404

    if album.user_id == current_user.id:
        return {"error": "Cannot leave a supported by on your own album"}, 403

    song_id = form.data.get("song_id")
    if song_id:
        # checks if song_id exists
        song_exists = Song.query.filter_by(id=song_id).first()
        if song_exists is None:
            return {"error": "Song not found"}, 404

        # checks if song_id exists in the album
        song = Song.query.filter_by(id=song_id, album_id=album_id).first()
        if song is None:
            return {"error": "Song not found in album"}, 404

        # checks if user has already left a supported by in the album
        supported_by_exists = SupportedBy.query.filter_by(
            user_id=current_user.id, album_id=album_id
        ).first()
        if supported_by_exists:
            return {
                "error": "You cannot leave more than one supported by on an album!"
            }, 409

    if form.validate_on_submit():

        new_supported_by = SupportedBy(
            description=form.data["description"],
            album_id=album_id,
            song_id=song_id,
            user_id=current_user.id,
        )

        db.session.add(new_supported_by)
        db.session.commit()

        return new_supported_by.to_dict(), 201

    return {"errors": form.errors}, 400


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

    if album in current_user.album_in_wishlist:
        return {"error": "Album already in wishlist"}, 409

    current_user.album_in_wishlist.append(album)
    db.session.commit()
    return {"message": "Album added to wishlist"}, 201


# POST - add album to current user's shopping cart from the album id
@album_routes.route("/<int:album_id>/shopping-cart", methods=["POST"])
def add_to_shopping_cart(album_id):
    album = Album.query.get(album_id)

    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    # if album does not exist
    if album is None:
        return {"error": "Album not found"}, 404

    # User cannot add if it is their own album
    if album.user_id == current_user.id:
        return {"error": "Forbidden"}, 403

    if album in current_user.album_in_shopping_cart:
        return {"error": "Album already in shopping cart"}, 409

    current_user.album_in_shopping_cart.append(album)
    db.session.commit()
    return {"message": "Album added to shopping cart"}, 201


# add album to collection belonging to current user
@album_routes.route("/<int:album_id>/collection", methods=["POST"])
def add_to_collection(album_id):
    album = Album.query.get(album_id)

    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    if album is None:
        return {"error": "Album not found"}, 404

    if album.user_id == current_user.id:
        return {"error": "Forbidden"}, 403

    if album in current_user.album_in_collection:
        return {"error": "Album already in collection"}, 409

    current_user.album_in_collection.append(album)
    db.session.commit()
    return {"message": "Album added to collection"}, 201
