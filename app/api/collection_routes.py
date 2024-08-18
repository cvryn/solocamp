from flask import Blueprint
from flask_login import current_user, login_required
from app.models import User, Album, collection, db
from sqlalchemy import func


collection_routes = Blueprint("collections", __name__)


# get albums in current logged in user's wishlist
@collection_routes.route("/all", methods=["GET"])
@login_required
def get_albums_in_wishlist_of_current_user():
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
        .filter(collection.columns.user_id == current_user.id)
        .all()
    )

    albums = [
        {
            "id": album_id,  # album_id from collection table
            "name": album_name,  # album name from Album model
            "count": count,  # count of distinct user_ids who have added the album
            "user_id": user_id,  # user_id from collection table (should match current_user.id)
        }
        for album_id, album_name, count, user_id in album_counts
    ]

    return albums
