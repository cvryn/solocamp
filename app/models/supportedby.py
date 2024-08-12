from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime, timezone


class SupportedBy(db.Model):
    __tablename__ = "supported_bys"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)

    description = db.Column(db.String(255), nullable=False)
    album_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("albums.id"), ondelete="SET NULL"),
        nullable=True,
    )
    user_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
        nullable=False,
    )
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(tz=timezone.utc))
    updated_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(tz=timezone.utc),
        onupdate=lambda: datetime.now(tz=timezone.utc),
    )

    # many-to-many relationships
    album = db.relationship("Album", back_populates="supported_by")
    user = db.relationship("User", back_populates="supported_by")

    def to_dict(self):
        return {
            "id": self.id,
            "description": self.description,
            "album_id": self.album_id,
            "user_id": self.user_id,
            "created_at": self.created_at,
        }
