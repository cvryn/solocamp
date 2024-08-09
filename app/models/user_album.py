from .db import db, add_prefix_for_prod


user_album = db.Table(
    "user_albums",
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
