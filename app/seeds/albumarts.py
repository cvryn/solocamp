from app.models import db, environment, SCHEMA, AlbumArt
from sqlalchemy.sql import text


def seed_albumarts():
    in_tongues_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=1,
    )
    ballads_1_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=2,
    )
    nectar_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=3,
    )
    smithereens_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=4,
    )

    this_is_what_blank_feels_like_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=5,
    )

    # Sam Smith Albums
    nirvana_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=6,
    )
    in_the_lonely_hour_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=7,
    )
    the_thrill_of_it_all_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=8,
    )

    # Fujii Kaze Albums
    help_ever_hurt_never_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=9,
    )
    love_all_serve_all_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=10,
    )

    # dhruv Albums
    rapunzel_art = AlbumArt(
        album_art="album_url",
        album_banner="banner_url",
        background_color="rbg(255,255,255)",
        album_id=11,
    )

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

    album_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995946/samples/solocamp/ac06e7532aed902507cac71442f1f087.300x300x1_hzgbov.jpg",
        album_banner="banner_url",
        background_color="rgb(1,3,4,9)",
        album_id=12,
    )

    album2_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995860/samples/solocamp/images_1_funeib.jpg",
        album_banner="banner_url",
        background_color="rgb(1,3,4,9)",
        album_id=13,
    )

    album3_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995944/samples/solocamp/ab67616d00001e02ce372525517ffc96c7079c4e_itffsc.jpg",
        album_banner="banner_url",
        background_color="rgb(1,3,4,9)",
        album_id=14,
    )

    album4_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995861/samples/solocamp/images_2_ikvwsv.jpg",
        album_banner="banner_url",
        background_color="rgb(1,3,4,9)",
        album_id=15,
    )

    album5_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995947/samples/solocamp/images_k14uhf.jpg",
        album_banner="banner_url",
        background_color="rgb(1,3,4,9)",
        album_id=16,
    )

    album6_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723036751/samples/solocamp/Jaychou_jay_in750l.jpg",
        album_banner="banner_url",
        background_color="rgb(1,3,4,9)",
        album_id=17,
    )

    album7_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723036761/samples/solocamp/1900x1900-000000-80-0-0_g9wahf.jpg",
        album_banner="banner_url",
        background_color="rgb(1,3,4,9)",
        album_id=18,
    )

    album8_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995944/samples/solocamp/ab67616d00001e02645fed9ec66eedfb267b52f5_icdb3g.jpg",
        album_banner="banner_url",
        background_color="rgb(1,3,4,9)",
        album_id=19,
    )

    album9_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995861/samples/solocamp/7270401_pw1ouq.jpg",
        album_banner="banner_url",
        background_color="rgb(1,3,4,9)",
        album_id=20,
    )

    album10_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995945/samples/solocamp/original_zunu3s.jpg",
        album_banner="banner_url",
        background_color="rgb(1,3,4,9)",
        album_id=21,
    )

    db.session.add_all(
        [
            in_tongues_art,
            ballads_1_art,
            nectar_art,
            smithereens_art,
            this_is_what_blank_feels_like_art,
            nirvana_art,
            in_the_lonely_hour_art,
            the_thrill_of_it_all_art,
            help_ever_hurt_never_art,
            love_all_serve_all_art,
            rapunzel_art,
        ]
    )

    db.session.add_all(
        [
            album_art,
            album2_art,
            album3_art,
            album4_art,
            album5_art,
            album6_art,
            album7_art,
            album8_art,
            album9_art,
            album10_art,
        ]
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
