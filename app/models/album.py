from .db import db, environment, SCHEMA, add_prefix_for_prod
from .wishlist import wishlist
from .collection import collection
from .shoppingcart import shopping_cart


class Album(db.Model):
    __tablename__ = "albums"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    user_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False
    )
    year = db.Column(db.Integer, nullable=False)
    genre = db.Column(db.String(20), nullable=False)
    price = db.Column(db.Numeric(6, 2), nullable=False)
    description = db.Column(db.String(2555), nullable=False)

    # many-to-many relationships
    user_in_wishlist = db.relationship(
        "User", secondary=wishlist, back_populates="album_in_wishlist"
    )
    user_in_collection = db.relationship(
        "User", secondary=collection, back_populates="album_in_collection"
    )
    user_in_shopping_cart = db.relationship(
        "User", secondary=shopping_cart, back_populates="album_in_shopping_cart"
    )

    # many-to-one relationship
    user = db.relationship("User", back_populates="album")

    # one-to-many relationships
    album_art = db.relationship(
        "AlbumArt", back_populates="album", cascade="all, delete-orphan"
    )
    song = db.relationship("Song", back_populates="album", cascade="all, delete-orphan")
    supported_by = db.relationship(
        "SupportedBy", back_populates="album", cascade="all, delete-orphan"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
            "user_username": self.user.username if self.user else None,
            "user_profile_image": self.user.profile_image if self.user else None,
            "year": self.year,
            "genre": self.genre,
            "price": float(self.price) if self.price else None,
            "description": self.description,
            "album_art": (
                [art.to_dict() for art in self.album_art] if self.album_art else None
            ),
            "songs": [song.to_dict() for song in self.song] if self.song else None,
            "supported_by": (
                [support.to_dict() for support in self.supported_by]
                if self.supported_by
                else None
            ),
        }
