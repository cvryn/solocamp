from flask import Blueprint
from flask_login import current_user
from app.models import User, Album, collection, db
from sqlalchemy import func


collection_routes = Blueprint("collections", __name__)


# get albums in current logged in user's wishlist
@collection_routes.route("/all", methods=["GET"])
def get_albums_of_current_user_in_collection():
    album_counts = (
        db.session.query(
            Album.id,
            Album.name,
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
            "count": count,
        }
        for album_id, album_name, count in album_counts
    ]

    return albums


# get collection by user_id
@collection_routes.route("/<int:user_id>", methods=["GET"])
def get_albums_by_user_id(user_id):
    user_exists = User.query.filter_by(id=user_id).first()
    if not user_exists:
        return {"error": "User not found"}, 404

    albums_in_wishlist = (
        db.session.query(Album)
        .join(collection, Album.id == collection.columns.album_id)
        .filter(collection.columns.user_id == user_id)
        .all()
    )

    albums = [album.to_dict() for album in albums_in_wishlist]
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
