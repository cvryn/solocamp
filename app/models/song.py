from .db import db, environment, SCHEMA, add_prefix_for_prod



class Song(db.Model):
    __tablename__ = "songs"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    track_number = db.Column(db.Integer, nullable=False)
    song_url = db.Column(db.String(255), nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("albums.id")), nullable=False)
    user_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
        nullable=False,
    )

# Class Relationships
    user = db.relationship("User", back_populates="song")
    album = db.relationship("Album", back_populates="song")

    supported_by = db.relationship("SupportedBy", back_populates="song")
