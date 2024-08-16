from flask import Blueprint
from flask_login import current_user
from app.models import User, Album, collection, db
from sqlalchemy import func


collection_routes = Blueprint("collections", __name__)


# get count of albums appearing in all collections
@collection_routes.route("/counts", methods=["GET"])
def get_album_counts_in_collection():
    album_counts = (
        db.session.query(
            Album.id,
            Album.name,
            Album.album_art,
            func.count(func.distinct(collection.columns.user_id)).label("count"),
        )
        .join(collection, Album.id == collection.columns.album_id)
        .group_by(Album.id)
        .all()
    )

    albums = [
        {
            "id": album_id,
            "name": album_name,
            "album_art": album_art,
            "count": count,
        }
        for album_id, album_name, album_art, count in album_counts
    ]

    return albums


# get collection belong to any user
@collection_routes.route("/<int:user_id>", methods=["GET"])
def get_collection(user_id):
    user_exists = User.query.filter_by(id=user_id).first()
    if not user_exists:
        return {"error": "User not found"}, 404

    albums_in_collection = (
        db.session.query(Album)
        .join(collection, Album.id == collection.columns.album_id)
        .filter(collection.columns.user_id == user_id)
        .all()
    )

    albums = [album.to_dict() for album in albums_in_collection]
    return albums
