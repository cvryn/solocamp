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
    genre = db.Column(db.String(20), nullable=False)
    price = db.Column(db.Numeric(6, 2), nullable=False)
    description = db.Column(db.String(2555), nullable=False)

    # many-to-many relationship
    user = db.relationship("User", secondary=wishlist, back_populates="album")

    # one-to-many relationships
    album_art = db.relationship(
        "AlbumArt", back_populates="album", cascade="all, delete-orphan"
    )
    song = db.relationship("Song", back_populates="album", cascade="all, delete-orphan")
    supported_by = db.relationship(
        "SupportedBy", back_populates="album", cascade="all, delete-orphan"
    )
    shopping_cart = db.relationship(
        "ShoppingCart", back_populates="album", cascade="all, delete-orphan"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
            "year": self.year,
            "genre": self.genre,
            "price": float(self.price) if self.price else None,
            "description": self.description,
            # "album_art": (
            #     [art.to_dict() for art in self.album_art] if self.album_art else None
            # ),
            # "songs": [song.to_dict() for song in self.song] if self.song else None,
            # "supported_by": (
            #     [support.to_dict() for support in self.supported_by]
            #     if self.supported_by
            #     else None
            # ),
            # "shopping_cart": (
            #     [cart.to_dict() for cart in self.shopping_cart]
            #     if self.shopping_cart
            #     else None
            # ),
        }
