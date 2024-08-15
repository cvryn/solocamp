from .db import db, environment, SCHEMA, add_prefix_for_prod


collection = db.Table(
    "collections",
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
    collection.schema = SCHEMA
