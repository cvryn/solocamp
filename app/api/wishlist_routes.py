from flask import Blueprint
from flask_login import current_user
from app.models import User, Album, wishlist, db


wishlist_routes = Blueprint("wishlists", __name__)


# get wishlist belong to any user
@wishlist_routes.route("/<int:user_id>", methods=["GET"])
def get_wishlist(user_id):
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
@wishlist_routes.route("/<int:user_id>/<int:album_id>", methods=["DELETE"])
def remove_from_wishlist(user_id, album_id):
    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    if current_user.id != user_id:
        return {"error": "Forbidden"}, 403

    user_exists = User.query.filter_by(id=user_id).first()
    if not user_exists:
        return {"error": "User not found"}, 404

    album_exists = Album.query.filter_by(id=album_id).first()
    if not album_exists:
        return {"error": "Album not found"}, 404

    album_in_wishlist = (
        db.session.query(wishlist).filter(wishlist.columns.album_id == album_id).first()
    )
    if not album_in_wishlist:
        return {"error": "Album not in wishlist"}, 404

    db.session.query(wishlist).filter(wishlist.columns.album_id == album_id).delete(synchronize_session=False)

    db.session.commit()
    return {"message": "Album has been successfully removed from your wishlist"}, 200
