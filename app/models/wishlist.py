from .db import db, add_prefix_for_prod, environment, SCHEMA

wishlist = db.Table(
    add_prefix_for_prod("wishlists"),
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
    wishlist.schema = SCHEMA
