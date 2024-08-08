from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone


db = SQLAlchemy()


class Base(db.Model):
    __abstract__ = True  # this tells SQLAlchemy not to create a table for this class

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(tz=timezone.utc))
    updated_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(tz=timezone.utc),
        onupdate=lambda: datetime.now(tz=timezone.utc),
    )


artist_album = db.Table(
    "artist_album",
    db.Column("artist_id", db.Integer, db.ForeignKey("artists.id"), primary_key=True),
    db.Column("album_id", db.Integer, db.ForeignKey("albums.id"), primary_key=True),
)


class Artist(db.Base):
    __tablename__ = "artists"

    username = db.Column(db.String(50), nullable=False, unique=True)
    profile_image = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    album = db.relationship("Album", secondary=artist_album, back_populates="artist")
    song = db.relationship("Song", back_populates="artist")
    supported_by = db.relationship("SupportedBy", back_populates="artist")
    wishlist = db.relationship("WishList", back_populates="artist")
    shopping_cart = db.relationship("ShoppingCart", back_populates="artist")

    def to_dict(self):
        return {"id": self.id, "username": self.username}


class Album(db.Base):
    __tablename__ = "albums"

    name = db.Column(db.String(50), nullable=False)
    artist_id = db.Column(
        db.Integer,
        db.ForeignKey("artists.id"),
        nullable=False,
    )
    year = db.Column(db.Integer, nullable=False)
    genre_id = db.Column(
        db.Integer,
        db.ForeignKey("genres.id"),
        nullable=False,
    )
    price = db.Column(db.Decimal(precision=4, scale=2), nullable=False)
    description = db.Column(db.String(2555), nullable=False)

    artist = db.relationship("Artist", secondary=artist_album, back_populates="album")
    genre = db.relationship("Genre", back_populates="album")

    album_art = db.relationship("AlbumArt", back_populates="album")
    song = db.relationship("Song", back_populates="album")
    genre = db.relationship("Genre", back_populates="album")
    wish_list = db.relationship("WishList", back_populates="album")
    shopping_cart = db.relationship("ShoppingCart", back_populates="album")


class AlbumArt(db.Base):
    __tablename__ = "album_arts"

    album_art = db.Column(db.String(255), nullable=False)
    album_banner = db.Column(db.String(255), nullable=False)
    background_color = db.Column(db.String(20), nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey("albums.id"), nullable=False)

    album = db.relationship("Album", back_populates="album_art")


class Song(db.Base):
    __tablename__ = "songs"

    title = db.Column(db.String(50), nullable=False)
    track_number = db.Column(db.Integer, nullable=False)
    song_url = db.Column(db.String(255), nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey("albums.id"), nullable=False)
    artist_id = db.Column(
        db.Integer,
        db.ForeignKey("artists.id"),
        nullable=False,
    )

    artist = db.relationship("Artist", back_populates="song")
    album = db.relationship("Album", back_populates="song")

    supported_by = db.relationship("SupportedBy", back_populates="song")


class SupportedBy(db.Base):
    __tablename__ = "supported_bys"

    description = db.Column(db.String(255), nullable=False)
    favorite_track = db.Column(db.Integer, db.ForeignKey("songs.id"), nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey("albums.id"), nullable=False)
    artist_id = db.Column(
        db.Integer,
        db.ForeignKey("artists.id"),
        nullable=False,
    )

    song = db.relationship("Song", back_populates="supported_by")
    album = db.relationship("Album", back_populates="supported_by")
    artist = db.relationship("Artist", back_populates="supported_by")


class Genre(db.Base):
    __tablename__ = "genres"

    name = db.Column(db.String(50), nullable=False)

    album = db.relationship("Album", back_populates="genre")


class WishList(db.Base):
    __tablename__ = "wishlists"

    album_id = db.Column(db.Integer, db.ForeignKey("albums.id"), nullable=False)
    artist_id = db.Column(
        db.Integer,
        db.ForeignKey("artists.id"),
        nullable=False,
    )

    artist = db.relationship("Artist", back_populates="wishlist")
    album = db.relationship("Album", back_populates="wishlist")


class ShoppingCart(db.Base):
    __tablename__ = "shopping_carts"

    album_id = db.Column(db.Integer, db.ForeignKey("albums.id"), nullable=False)
    artist_id = db.Column(
        db.Integer,
        db.ForeignKey("artists.id"),
        nullable=False,
    )

    artist = db.relationship("Artist", back_populates="shopping_cart")
    album = db.relationship("Album", back_populates="shopping_cart")
