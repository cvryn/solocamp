from .db import db, environment, SCHEMA, add_prefix_for_prod





class ShoppingCart(db.Model):
    __tablename__ = "shopping_carts"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)

    album_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("albums.id")), nullable=False)
    user_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
        nullable=False,
    )

# Class Relationships
    user = db.relationship("User", back_populates="shopping_cart")
    album = db.relationship("Album", back_populates="shopping_cart")
