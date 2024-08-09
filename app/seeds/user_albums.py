from app.models import db, environment, SCHEMA, user_album
from sqlalchemy.sql import text


def seed_user_albums():
    user_album_entries = [
        {"user_id": 15, "album_id": 1},
        {"user_id": 16, "album_id": 2},
    ]

    for entry in user_album_entries:
        db.session.execute(user_album.insert().values(entry))

    db.session.commit()


def undo_user_albums():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.user_albums RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM user_albums"))

    db.session.commit()
