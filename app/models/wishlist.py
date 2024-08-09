from .db import db, add_prefix_for_prod


wishlist = db.Table(
    "wishlists",
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
