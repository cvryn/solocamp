from app.models import db, environment, SCHEMA, ShoppingCart
from sqlalchemy.sql import text


def seed_shoppingcarts():
    cart_item1 = ShoppingCart(user_id = 2, album_id = 31)
    cart_item2 = ShoppingCart(user_id = 3, album_id = 30)


    db.session.add_all([cart_item1, cart_item2])
    db.session.commit()


def undo_shoppingcarts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.shoppingcarts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM shoppingcart"))

    db.session.commit()
