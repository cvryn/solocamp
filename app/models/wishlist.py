from .db import db, environment, SCHEMA, add_prefix_for_prod


class WishList(db.Model):
    __tablename__ = "wishlists"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
        nullable=False,
    )
    album_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("albums.id")), nullable=False)

    # many-to-one relationships
    user = db.relationship("User", back_populates="wish_list")
    album = db.relationship("Album", back_populates="wish_list")
