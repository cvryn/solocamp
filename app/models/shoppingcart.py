from .db import db, environment, SCHEMA, add_prefix_for_prod


shopping_cart = db.Table(
    "shopping_carts",
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
        primary_key=True,
    ),
    db.Column(
        "album_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("albums.id")),
        primary_key=True,
    ),
)

if environment == "production":
    shopping_cart.schema = SCHEMA
