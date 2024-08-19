from flask import Blueprint
from flask_login import current_user
from app.models import User, Album, shopping_cart, db

shopping_cart_routes = Blueprint("shopping_carts", __name__)


# get all albums in current logged in user's shopping cart
@shopping_cart_routes.route("/all", methods=["GET"])
def get_albums_in_shopping_cart_of_current_user():
    if not current_user.is_authenticated:
        return {"error": "User not logged in"}, 200

    user_exists = User.query.filter_by(id=current_user.id).first()
    if not user_exists:
        return {"error": "User not found"}, 404

    albums_in_shopping_cart = (
        db.session.query(Album)
        .join(shopping_cart, Album.id == shopping_cart.columns.album_id)
        .filter(shopping_cart.columns.user_id == current_user.id)
        .all()
    )

    albums = [album.to_dict() for album in albums_in_shopping_cart]
    return albums, 200


# DELETE - remove album from current users shopping cart
@shopping_cart_routes.route("/<int:album_id>", methods=["DELETE"])
def remove_album_from_shopping_cart(album_id):
    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    album_exists = Album.query.filter_by(id=album_id).first()
    if not album_exists:
        return {"error": "Album not found"}, 404

    album_in_shopping_cart = (
        db.session.query(shopping_cart)
        .filter(shopping_cart.columns.album_id == album_id)
        .first()
    )
    if not album_in_shopping_cart:
        return {"error": "Album not in shopping cart"}, 404

    db.session.query(shopping_cart).filter(
        shopping_cart.columns.album_id == album_id
    ).delete(synchronize_session=False)

    db.session.commit()
    return {
        "message": "Album has been successfully removed from your shopping cart"
    }, 200
