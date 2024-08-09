from app.models import db, environment, SCHEMA, SupportedBy
from sqlalchemy.sql import text


def seed_supportedbys():

    joji_rapunzel = SupportedBy(
        description="Loved the vibes!", album_id=11, song_id=56, user_id=2
    )

    jvke_nocturne = SupportedBy(
        description="Jay consistently releasing bangers!",
        song_id=62,
        album_id=12,
        user_id =3
    )

    samsmith_21 = SupportedBy(
        description="She is an absolute queen! This song is so deep.",
        song_id=84,
        album_id=23,
        user_id =4
    )

    fujii_nirvana = SupportedBy(
        description="His vocals in this album is truly amazing and one of a kind. Even better live!",
        song_id=33,
        album_id=6,
        user_id =5
    )

    dhruv_a_star = SupportedBy(
        description="Amazing vocals as always, to be expected from THE LADY GAGA!",
        song_id=104,
        album_id=25,
        user_id =6
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

    db.session.add_all([joji_rapunzel, jvke_nocturne, samsmith_21, fujii_nirvana, dhruv_a_star ,jay_ninja, adele_nineteen])

    db.session.commit()


def undo_supportedbys():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.supported_bys RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM supported_bys"))

    db.session.commit()
