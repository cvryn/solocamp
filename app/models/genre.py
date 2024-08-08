from .db import db, environment, SCHEMA, add_prefix_for_prod



class Genre(db.Model):
    __tablename__ = "genres"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    # Class Relationships

    album = db.relationship("Album", back_populates="genre")
