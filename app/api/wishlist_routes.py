from flask import Blueprint
from flask_login import current_user
from app.models import User, Album, wishlist, db
from sqlalchemy import func


wishlist_routes = Blueprint("wishlists", __name__)


# get albums in current logged in user's wishlist
@wishlist_routes.route("/all", methods=["GET"])
def get_albums_in_wishlist_of_current_user():
    subquery = (
        db.session.query(
            wishlist.columns.album_id,
            func.count(func.distinct(wishlist.columns.user_id)).label("count"),
        )
        .group_by(wishlist.columns.album_id)
        .subquery()
    )

    album_counts = (
        db.session.query(
            wishlist.columns.album_id,
            Album.name,
            subquery.c.count,
            wishlist.columns.user_id,
        )
        .join(Album, Album.id == wishlist.columns.album_id)
        .join(subquery, subquery.c.album_id == wishlist.columns.album_id)
        .all()
    )

    albums = [
        {
            "id": album_id,  # album_id from wishlist table
            "name": album_name,  # album name from Album model
            "count": count,  # count of distinct user_ids
            "user_id": user_id,  # user_id from wishlist table
        }
        for album_id, album_name, count, user_id in album_counts
    ]

    return albums


# get albums in wishlist by user_id
@wishlist_routes.route("/<int:user_id>", methods=["GET"])
def get_albums_in_wishlist_by_user_id(user_id):
    user_exists = User.query.filter_by(id=user_id).first()
    if not user_exists:
        return {"error": "User not found"}, 404

    albums_in_wishlist = (
        db.session.query(Album)
        .join(wishlist, Album.id == wishlist.columns.album_id)
        .filter(wishlist.columns.user_id == user_id)
        .all()
    )

    albums = [album.to_dict() for album in albums_in_wishlist]
    return albums


# delete album from wishlist belonging to current user
@wishlist_routes.route("<int:album_id>", methods=["DELETE"])
def remove_album_from_wishlist(album_id):
    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    album_exists = Album.query.filter_by(id=album_id).first()
    if not album_exists:
        return {"error": "Album not found"}, 404

    album_in_wishlist = (
        db.session.query(wishlist).filter(wishlist.columns.album_id == album_id).first()
    )
    if not album_in_wishlist:
        return {"error": "Album not in wishlist"}, 404

    db.session.query(wishlist).filter(wishlist.columns.album_id == album_id).delete(
        synchronize_session=False
    )

    db.session.commit()
    return {"message": "Album has been successfully removed from your wishlist"}, 200
