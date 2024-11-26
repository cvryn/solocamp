from flask_sqlalchemy import SQLAlchemy
import os


environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


db = SQLAlchemy()


# helper function for adding prefix to foreign key column references in production
def add_prefix_for_prod(attr):
    if environment == "production":
        return f"{SCHEMA}.{attr}"
    else:
        return attr


# base model that we inherit from, id, created at, updated at attributes

# class Base(db.Model):
#     __abstract__ = True  # this tells SQLAlchemy not to create a table for this class

#     id = db.Column(db.Integer, primary_key=True)
# created_at = db.Column(db.DateTime, default=lambda: datetime.now(tz=timezone.utc))
# updated_at = db.Column(
#     db.DateTime,
#     default=lambda: datetime.now(tz=timezone.utc),
#     onupdate=lambda: datetime.now(tz=timezone.utc),
# )
