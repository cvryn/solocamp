from .db import db, environment, SCHEMA
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .wishlist import wishlist
from .collection import collection
from .shoppingcart import shopping_cart


class User(db.Model, UserMixin):
    __tablename__ = "users"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    profile_image = db.Column(db.String(255), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    # many-to-many relationship
    album_in_wishlist = db.relationship(
        "Album", secondary=wishlist, back_populates="user_in_wishlist"
    )
    album_in_collection = db.relationship(
        "Album", secondary=collection, back_populates="user_in_collection"
    )
    album_in_shopping_cart = db.relationship(
        "Album", secondary=shopping_cart, back_populates="user_in_shopping_cart"
    )

    # one-to-many relationships
    album = db.relationship("Album", back_populates="user")
    song = db.relationship("Song", back_populates="user")
    supported_by = db.relationship("SupportedBy", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "profile_image": self.profile_image,
            "album_in_wishlist": (
                [album.to_dict() for album in self.album_in_wishlist]
                if self.album_in_wishlist
                else None
            ),
            "album_in_collection": (
                [album.to_dict() for album in self.album_in_collection]
                if self.album_in_collection
                else None
            ),
            "album_in_shopping_cart": (
                [album.to_dict() for album in self.album_in_shopping_cart]
                if self.album_in_shopping_cart
                else None
            ),
            "album": (
                [album.to_dict() for album in self.album]
                if self.album
                else None
            ),
            
        }
