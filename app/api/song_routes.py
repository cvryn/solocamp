from flask import Blueprint, request
from flask_login import current_user
from app.models import Song, db
from app.forms import SongForm


song_routes = Blueprint("songs", __name__)


# get all songs
@song_routes.route("/", methods=["GET"])
def songs():
    songs = Song.query.all()
    return [song.to_dict() for song in songs], 200


# get song by id
# edit song by id belonging to current user
# delete song by id beloning to current user
@song_routes.route("/<int:song_id>", methods=["GET", "PUT", "DELETE"])
def song_details(song_id):
    song = Song.query.get(song_id)

    if request.method == "PUT":
        form = SongForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        if song is None:
            return {"error": "Song not found"}, 404

        if song.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        if form.validate_on_submit():
            data = request.json
            song.title = data.get("title", song.title)
            song.track_number = data.get("track_number", song.track_number)
            song.song_url = data.get("song_url", song.song_url)

            db.session.commit()
            return song.to_dict(), 200

    elif request.method == "DELETE":
        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        if song is None:
            return {"error": "Song not found"}, 404

        if song.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        db.session.delete(song)
        db.session.commit()
        return {"message": "Song deleted"}, 200

    else:
        if song is None:
            return {"error": "Song not found"}, 404

        return song.to_dict(), 200
