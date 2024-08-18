from app.models import db, environment, SCHEMA, shopping_cart
from sqlalchemy.sql import text


def seed_shoppingcarts():
    shopping_cart_items = [
        {"user_id": 2, "album_id": 6},
        {"user_id": 2, "album_id": 7},
        {"user_id": 2, "album_id": 8},
        {"user_id": 2, "album_id": 30},
        {"user_id": 2, "album_id": 31},
        {"user_id": 3, "album_id": 30},
        {"user_id": 12, "album_id": 1},
        {"user_id": 12, "album_id": 2},
        {"user_id": 12, "album_id": 3},
        {"user_id": 12, "album_id": 10},
        {"user_id": 13, "album_id": 3},
        {"user_id": 13, "album_id": 11},
        {"user_id": 13, "album_id": 20},
        {"user_id": 13, "album_id": 21},
        {"user_id": 15, "album_id": 6},
        {"user_id": 17, "album_id": 5},
        {"user_id": 17, "album_id": 28},
    ]

    for entry in shopping_cart_items:
        db.session.execute(shopping_cart.insert().values(entry))

    db.session.commit()


def undo_shoppingcarts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.shopping_carts RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM shopping_carts"))

    db.session.commit()
