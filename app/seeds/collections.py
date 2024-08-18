from app.models import db, environment, SCHEMA, collection
from sqlalchemy.sql import text


def seed_collections():
    collection_entries = [
        {"user_id": 2, "album_id": 10},
        {"user_id": 2, "album_id": 11},
        {"user_id": 2, "album_id": 12},
        {"user_id": 2, "album_id": 22},
        {"user_id": 2, "album_id": 23},
        {"user_id": 2, "album_id": 24},
        {"user_id": 3, "album_id": 9},
        {"user_id": 3, "album_id": 10},
        {"user_id": 7, "album_id": 10},
        {"user_id": 7, "album_id": 11},
        {"user_id": 7, "album_id": 25},
        {"user_id": 7, "album_id": 26},
        {"user_id": 8, "album_id": 26},
        {"user_id": 8, "album_id": 31},
        {"user_id": 12, "album_id": 7},
        {"user_id": 12, "album_id": 8},
        {"user_id": 12, "album_id": 9},
        {"user_id": 12, "album_id": 11},
        {"user_id": 12, "album_id": 24},
        {"user_id": 12, "album_id": 25},
        {"user_id": 12, "album_id": 26},
        {"user_id": 12, "album_id": 27},
        {"user_id": 13, "album_id": 2},
        {"user_id": 14, "album_id": 2},
        {"user_id": 15, "album_id": 2},
        {"user_id": 15, "album_id": 3},
        {"user_id": 15, "album_id": 4},
        {"user_id": 15, "album_id": 5},
        {"user_id": 15, "album_id": 10},
        {"user_id": 16, "album_id": 2},
        {"user_id": 16, "album_id": 3},
        {"user_id": 16, "album_id": 4},
        {"user_id": 16, "album_id": 10},
        {"user_id": 16, "album_id": 11},
        {"user_id": 16, "album_id": 12},
        {"user_id": 17, "album_id": 13},
        {"user_id": 17, "album_id": 11},
        {"user_id": 17, "album_id": 12},
    ]

    for entry in collection_entries:
        db.session.execute(collection.insert().values(entry))

    db.session.commit()


def undo_collections():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.collections RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM collections"))

    db.session.commit()
