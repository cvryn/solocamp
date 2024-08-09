from app.models import db, environment, SCHEMA, SupportedBy
from sqlalchemy.sql import text


def seed_supportedbys():

    joji_rapunzel = SupportedBy(
        description="Loved the vibes!", album_id=11, song_id=56, user_id=2
    )

    jay_ninja = SupportedBy(
        description="Absolutely loved this album! In fact, I'm going to get all his albums.",
        album_id=17,
        song_id=67,
        user_id=7,
    )

    adele_nineteen = SupportedBy(
        description='Adele\'s first album, and also my favorite album. Contains my all-time favorite Adele song, "Make You Feel My Love"',
        album_id=22,
        song_id=80,
        user_id=12,
    )

    db.session.add_all([joji_rapunzel, jay_ninja, adele_nineteen])

    db.session.commit()


def undo_supportedbys():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.supported_bys RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM supported_bys"))

    db.session.commit()
