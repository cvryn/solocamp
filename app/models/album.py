from .db import db, environment, SCHEMA, add_prefix_for_prod
from .wishlist import wishlist


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
    price = db.Column(db.Numeric(6, 2), nullable=False)
    description = db.Column(db.String(2555), nullable=False)

    # many-to-many relationship
    user = db.relationship("User", secondary=wishlist, back_populates="album")

    # many-to-one relationships
    genre = db.relationship("Genre", back_populates="album")

    # one-to-many relationships
    album_art = db.relationship("AlbumArt", back_populates="album")
    song = db.relationship("Song", back_populates="album")
    supported_by = db.relationship("SupportedBy", back_populates="album")
    shopping_cart = db.relationship("ShoppingCart", back_populates="album")
