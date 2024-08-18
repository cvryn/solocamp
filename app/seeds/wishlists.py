from app.models import db, environment, SCHEMA, wishlist
from sqlalchemy.sql import text


def seed_wishlists():
    wishlist_entries = [
        {"user_id": 2, "album_id": 20},
        {"user_id": 2, "album_id": 21},
        {"user_id": 2, "album_id": 22},
        {"user_id": 2, "album_id": 23},
        {"user_id": 2, "album_id": 25},
        {"user_id": 2, "album_id": 30},
        {"user_id": 3, "album_id": 29},
        {"user_id": 4, "album_id": 31},
        {"user_id": 5, "album_id": 31},
        {"user_id": 10, "album_id": 30},
        {"user_id": 10, "album_id": 31},
        {"user_id": 11, "album_id": 30},
        {"user_id": 11, "album_id": 31},
        {"user_id": 12, "album_id": 1},
        {"user_id": 12, "album_id": 2},
        {"user_id": 12, "album_id": 3},
        {"user_id": 12, "album_id": 5},
        {"user_id": 12, "album_id": 30},
        {"user_id": 12, "album_id": 31},
        {"user_id": 15, "album_id": 12},
        {"user_id": 17, "album_id": 1},
        {"user_id": 17, "album_id": 10},
        {"user_id": 17, "album_id": 11},
        {"user_id": 17, "album_id": 12},
        {"user_id": 17, "album_id": 31},
    ]

    for entry in wishlist_entries:
        db.session.execute(wishlist.insert().values(entry))

    db.session.commit()


def undo_wishlists():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.wishlists RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM wishlists"))

    db.session.commit()
