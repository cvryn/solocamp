from app.models import db, environment, SCHEMA, AlbumArt
from sqlalchemy.sql import text


def seed_albumarts():
    nineteen_art = AlbumArt(
        album_art="url",
        album_banner="url",
        background_color="rgb(6, 7, 9)",
        album_id=22,
    )

    twenty_one_art = AlbumArt(
        album_art="url",
        album_banner="url",
        background_color="rgb(139, 170, 60)",
        album_id=23,
    )

    the_fame_monster_art = AlbumArt(
        album_art="url",
        album_banner="url",
        background_color="rgb(10, 27, 54)",
        album_id=24,
    )

    a_star_is_born_art = AlbumArt(
        album_art="url",
        album_banner="url",
        background_color="rgb(205, 154, 56)",
        album_id=25,
    )

    elements_of_life_art = AlbumArt(
        album_art="url",
        album_banner="url",
        background_color="rgb(188, 168, 129)",
        album_id=26,
    )

    kaleidoscope_art = AlbumArt(
        album_art="url",
        album_banner="url",
        background_color="rgb(51, 8, 14)",
        album_id=27,
    )

    californication_art = AlbumArt(
        album_art="url",
        album_banner="url",
        background_color="rgb(198, 54, 43)",
        album_id=28,
    )

    by_the_way_art = AlbumArt(
        album_art="url",
        album_banner="url",
        background_color="rgb(98, 54, 49)",
        album_id=29,
    )

    revealed_art = AlbumArt(
        album_art="url",
        album_banner="url",
        background_color="rgb(72, 12, 59)",
        album_id=30,
    )

    united_we_are_art = AlbumArt(
        album_art="url",
        album_banner="url",
        background_color="rgb(177, 109, 110)",
        album_id=31,
    )

    db.session.add_all(
        [
            nineteen_art,
            twenty_one_art,
            the_fame_monster_art,
            a_star_is_born_art,
            elements_of_life_art,
            kaleidoscope_art,
            californication_art,
            by_the_way_art,
            revealed_art,
            united_we_are_art,
        ]
    )

    db.session.commit()


def undo_albumarts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.albumarts RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM albumart"))

    db.session.commit()
