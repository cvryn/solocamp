from app.models import db, environment, SCHEMA, WishList
from sqlalchemy.sql import text


def seed_wishlists():
    wishlist1 = WishList(user_id=2, album_id=26)

    wishlist2 = WishList(user_id=3, album_id=26)

    db.session.add_all([wishlist1, wishlist2])

    db.session.commit()


def undo_wishlists():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.wishlists RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM wishlist"))

    db.session.commit()
