from app.models import db, environment, SCHEMA, SupportedBy
from sqlalchemy.sql import text


def seed_supportedbys():

    joji_rapunzel = SupportedBy(
        description="I loved the vibes of this album. Very beautiful melodies and good use of rhythm!",
        album_id=11,
        song_id=57,
        user_id=2,
    )

    joji_help_ever = SupportedBy(
        description="The instrumental conveyed the most beautiful emotions and the lyrics were very meaningful.",
        album_id=9,
        song_id=48,
        user_id=2,
    )

    joji_fame_monster = SupportedBy(
        description="I listened to this entire album, it's my daily anthem.",
        album_id=24,
        song_id=97,
        user_id=2,
    )

    joji_love_all = SupportedBy(
        description="Beautiful voice in studio and live. This almost is one of my top 10s!",
        album_id=10,
        song_id=54,
        user_id=2,
    )

    joji_get_away = SupportedBy(
        description="I really love Vinida's vocals in this album! Can't wait for her future releases!",
        album_id=15,
        song_id=65,
        user_id=2,
    )

    joji_kaleidoscope = SupportedBy(
        description="Really feeling the lyrics in this album",
        album_id=26,
        song_id=133,
        user_id=2,
    )

    joji_ice_kingdom = SupportedBy(
        description="I really love Vinida's vocals in this album! Can't wait for her future releases!",
        album_id=18,
        song_id=70,
        user_id=2,
    )

    jvke_nocturne = SupportedBy(
        description="Jay consistently releasing bangers!",
        album_id=12,
        song_id=62,
        user_id=3,
    )

    jvke_smithereens = SupportedBy(
        description="Amazing sounds, amazing lyrics, amazing instrumentals",
        album_id=4,
        song_id=23,
        user_id=3,
    )

    samsmith_21 = SupportedBy(
        description="She is an absolute queen! This song is so deep.",
        album_id=23,
        song_id=84,
        user_id=4,
    )

    fujii_nirvana = SupportedBy(
        description="His vocals in this album is truly amazing and one of a kind. Even better live!",
        album_id=6,
        song_id=33,
        user_id=5,
    )
    dhruv_smithereens = SupportedBy(
        description="I most definitely shed a few tears listening to this album by Joji...very beautiful",
        album_id=4,
        song_id=21,
        user_id=6,
    )

    dhruv_a_star = SupportedBy(
        description="Amazing vocals as always, to be expected from THE LADY GAGA!",
        album_id=25,
        song_id=104,
        user_id=6,
    )

    jay_nineteen = SupportedBy(
        description="Absolutely loved this album! In fact, I'm going to get all her albums.",
        album_id=22,
        user_id=7,
    )

    jolin_nineteen = SupportedBy(
        description='Adele\'s first album, and also my favorite album. Contains my all-time favorite Adele song, "Make You Feel My Love"',
        album_id=22,
        user_id=11,
    )

    fujii_smithereens = SupportedBy(
        description="When I first heard this album, I knew it would be a consistent replay. The lyrics are well chosen and the rhythm is beautiful.",
        album_id=4,
        song_id=22,
        user_id=5,
    )

    db.session.add_all(
        [
            joji_rapunzel,
            joji_help_ever,
            joji_fame_monster,
            joji_love_all,
            joji_get_away,
            joji_kaleidoscope,
            joji_ice_kingdom,
            jvke_nocturne,
            jvke_smithereens,
            samsmith_21,
            fujii_nirvana,
            dhruv_smithereens,
            dhruv_a_star,
            jay_nineteen,
            jolin_nineteen,
            fujii_smithereens
        ]
    )

    db.session.commit()


def undo_supportedbys():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.supported_bys RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM supported_bys"))

    db.session.commit()
