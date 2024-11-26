from .db import db, environment, SCHEMA, add_prefix_for_prod


class AlbumArt(db.Model):
    __tablename__ = "album_arts"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)

    album_art = db.Column(db.String(255), nullable=False)
    album_banner = db.Column(db.String(255), nullable=False)
    background_color = db.Column(db.String(20), nullable=False)
    album_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("albums.id")), nullable=False
    )

    # many-to-one relationship
    album = db.relationship("Album", back_populates="album_art")

    def to_dict(self):
        return {
            "id": self.id,
            "album_art": self.album_art,
            "album_banner": self.album_banner,
            "background_color": self.background_color,
            "album_id": self.album_id,
        }
