from .db import db, environment, SCHEMA, add_prefix_for_prod
from . import user_album


class Album(db.Model):
    __tablename__ = "albums"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    user_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
        nullable=False,
    )
    year = db.Column(db.Integer, nullable=False)
    genre_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("genres.id")),
        nullable=False,
    )
    price = db.Column(db.Numeric(4, 2), nullable=False)
    description = db.Column(db.String(2555), nullable=False)

    # Class Relationships
    user = db.relationship("User", secondary=user_album, back_populates="album")
    album_art = db.relationship("AlbumArt", back_populates="album")
    song = db.relationship("Song", back_populates="album")
    genre = db.relationship("Genre", back_populates="album")
    supported_by = db.relationship("SupportedBy", back_populates="album")
    wish_list = db.relationship("WishList", back_populates="album")
    shopping_cart = db.relationship("ShoppingCart", back_populates="album")
