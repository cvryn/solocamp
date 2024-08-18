from flask import Blueprint
from flask_login import current_user
from app.models import User, Album, collection, db
from sqlalchemy import func


collection_routes = Blueprint("collections", __name__)


# get albums in current logged in user's wishlist
@collection_routes.route("/all", methods=["GET"])
def get_albums_of_current_user_in_collection():
    subquery = (
        db.session.query(
            collection.columns.album_id,
            func.count(func.distinct(collection.columns.user_id)).label("count"),
        )
        .group_by(collection.columns.album_id)
        .subquery()
    )

    album_counts = (
        db.session.query(
            collection.columns.album_id,
            Album.name,
            subquery.c.count,
            collection.columns.user_id,
        )
        .join(Album, Album.id == collection.columns.album_id)
        .join(subquery, subquery.c.album_id == collection.columns.album_id)
        .all()
    )

    albums = [
        {
            "id": album_id,  # album_id from collection table
            "name": album_name,  # album name from Album model
            "count": count,  # count of distinct user_ids
            "user_id": user_id,  # user_id from collection table
        }
        for album_id, album_name, count, user_id in album_counts
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
