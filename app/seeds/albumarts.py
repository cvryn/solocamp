from app.models import db, environment, SCHEMA, AlbumArt
from sqlalchemy.sql import text


def seed_albumarts():
    in_tongues_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/joji/in-tongues/Joji_In_Tongues-Deluxe_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/joji/in-tongues/joji_in_tongues_banner.png",
        background_color="rgb(81, 140, 226)",
        album_id=1,
    )
    ballads_1_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/joji/ballads-1/Joji_Ballads_1_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/joji/ballads-1/joji_ballads_1_banner.png",
        background_color="rgb(33, 182, 193)",
        album_id=2,
    )
    nectar_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/joji/nectar/Joji_Nectar_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/joji/nectar/joji_nectar_banner.png",
        background_color="rgb(212, 49, 54)",
        album_id=3,
    )
    smithereens_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/joji/smithereens/JOJI_SMITHEREENS_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/joji/smithereens/joji_smithereens_banner.png",
        background_color="rgb(73, 123, 152)",
        album_id=4,
    )

    this_is_what_blank_feels_like_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/jvke/this_is_what_blank_feels_like/JVKE_this_is_what_blank_feels_like+_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/jvke/this_is_what_blank_feels_like/jvke-this-is-what-blank-feels-like-banner.png",
        background_color="rgb(184, 164, 48)",
        album_id=5,
    )

    # Sam Smith Albums
    nirvana_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/sam-smith/nirvana/sam_smith-Nirvana_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/sam-smith/nirvana/samsmith_nirvana_banner.png",
        background_color="rgb(64, 208, 138)",
        album_id=6,
    )
    in_the_lonely_hour_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/sam-smith/in-the-lonely-hour/sam_smith_in_the_lonely_hour_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/sam-smith/in-the-lonely-hour/samsmith_in_the_lonely_hour_banner.png",
        background_color="rgb(128, 120, 109)",
        album_id=7,
    )
    the_thrill_of_it_all_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/sam-smith/the-thrill-of-it-all/sam_smith_the_thrill_of_it_all_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/sam-smith/the-thrill-of-it-all/samsmith_the_thrill_of_it_all.png",
        background_color="rgb(242, 242, 242)",
        album_id=8,
    )

    # Fujii Kaze Albums
    help_ever_hurt_never_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/fujii/help-ever-hurt-never/fujii_help_ever_hurt_never_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/fujii/help-ever-hurt-never/fujii_help_ever_hurt_never_banner.png",
        background_color="rgb(63, 63, 63)",
        album_id=9,
    )
    love_all_serve_all_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/fujii/love-all-serve-all/Fujii-Kaze-LOVE-ALL-SERVE-ALL-album-art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/fujii/love-all-serve-all/fujii_love_all_serve_all_banner.png",
        background_color="rgb(251, 110, 86)",
        album_id=10,
    )

    # dhruv Albums
    rapunzel_art = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/dhruv/rapunzel/dhruv_rapunzel_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/dhruv/rapunzel/dhruv_rapunzel_banner.png",
        background_color="rgb(214, 200, 184)",
        album_id=11,
    )

    nineteen_art = AlbumArt(
        album_art="https://solocamp-ac.s3.us-east-2.amazonaws.com/19/nineteen.jpg",
        album_banner="https://solocamp-ac.s3.us-east-2.amazonaws.com/19/nineteen_banner.png",
        background_color="rgb(6, 7, 9)",
        album_id=22,
    )

    twenty_one_art = AlbumArt(
        album_art="https://solocamp-ac.s3.us-east-2.amazonaws.com/21/twenty_one.jpg",
        album_banner="https://solocamp-ac.s3.us-east-2.amazonaws.com/21/twenty_one_banner.png",
        background_color="rgb(139, 170, 60)",
        album_id=23,
    )

    the_fame_monster_art = AlbumArt(
        album_art="https://solocamp-ac.s3.us-east-2.amazonaws.com/The+Fame+Monster/the_fame_monster.jpg",
        album_banner="https://solocamp-ac.s3.us-east-2.amazonaws.com/The+Fame+Monster/the_fame_monster_banner.png",
        background_color="rgb(10, 27, 54)",
        album_id=24,
    )

    a_star_is_born_art = AlbumArt(
        album_art="https://solocamp-ac.s3.us-east-2.amazonaws.com/A+Star+Is+Born/a_star_is_born.jpg",
        album_banner="https://solocamp-ac.s3.us-east-2.amazonaws.com/A+Star+Is+Born/a_star_is_born_banner.png",
        background_color="rgb(205, 154, 56)",
        album_id=25,
    )

    elements_of_life_art = AlbumArt(
        album_art="https://solocamp-ac.s3.us-east-2.amazonaws.com/Elements+of+Life/elements_of_life.jpg",
        album_banner="https://solocamp-ac.s3.us-east-2.amazonaws.com/Elements+of+Life/elements_of_life_banner.png",
        background_color="rgb(188, 168, 129)",
        album_id=26,
    )

    kaleidoscope_art = AlbumArt(
        album_art="https://solocamp-ac.s3.us-east-2.amazonaws.com/Kaleidoscope/kaleidoscope.jpg",
        album_banner="https://solocamp-ac.s3.us-east-2.amazonaws.com/Kaleidoscope/kaleidoscope_banner.png",
        background_color="rgb(51, 8, 14)",
        album_id=27,
    )

    californication_art = AlbumArt(
        album_art="https://solocamp-ac.s3.us-east-2.amazonaws.com/Californication/californication.jpg",
        album_banner="https://solocamp-ac.s3.us-east-2.amazonaws.com/Californication/californication_banner.png",
        background_color="rgb(198, 54, 43)",
        album_id=28,
    )

    by_the_way_art = AlbumArt(
        album_art="https://solocamp-ac.s3.us-east-2.amazonaws.com/By+the+Way/by_the_way.jpg",
        album_banner="https://solocamp-ac.s3.us-east-2.amazonaws.com/By+the+Way/by_the_way_banner.png",
        background_color="rgb(98, 54, 49)",
        album_id=29,
    )

    revealed_art = AlbumArt(
        album_art="https://solocamp-ac.s3.us-east-2.amazonaws.com/Revealed/revealed.jpg",
        album_banner="https://solocamp-ac.s3.us-east-2.amazonaws.com/Revealed/revealed_banner.png",
        background_color="rgb(72, 12, 59)",
        album_id=30,
    )

    united_we_are_art = AlbumArt(
        album_art="https://solocamp-ac.s3.us-east-2.amazonaws.com/United+We+Are/united_we_are.jpg",
        album_banner="https://solocamp-ac.s3.us-east-2.amazonaws.com/United+We+Are/united_we_are_banner.png",
        background_color="rgb(177, 109, 110)",
        album_id=31,
    )

    album_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995946/samples/solocamp/ac06e7532aed902507cac71442f1f087.300x300x1_hzgbov.jpg",
        album_banner="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723702419/solocamp/ac06e7532aed902507cac71442f1f087.300x300x1_vnywez.jpg",
        background_color="rgb(1,3,4,9)",
        album_id=12,
    )

    album2_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995860/samples/solocamp/images_1_funeib.jpg",
        album_banner="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723702421/solocamp/images_1_bx6k9k.jpg",
        background_color="rgb(1,3,4,9)",
        album_id=13,
    )

    album3_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995944/samples/solocamp/ab67616d00001e02ce372525517ffc96c7079c4e_itffsc.jpg",
        album_banner="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723702423/solocamp/ab67616d00001e02ce372525517ffc96c7079c4e_sekbqu.jpg",
        background_color="rgb(1,3,4,9)",
        album_id=14,
    )

    album4_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995861/samples/solocamp/images_2_ikvwsv.jpg",
        album_banner="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723702422/solocamp/images_2_e6iucc.jpg",
        background_color="rgb(1,3,4,9)",
        album_id=15,
    )

    album5_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995947/samples/solocamp/images_k14uhf.jpg",
        album_banner="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723702423/solocamp/ab67616d00001e02645fed9ec66eedfb267b52f5_rxd1rl.jpg",
        background_color="rgb(1,3,4,9)",
        album_id=16,
    )

    album6_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723036751/samples/solocamp/Jaychou_jay_in750l.jpg",
        album_banner="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723702421/solocamp/Jaychou_jay_wuobbi.jpg",
        background_color="rgb(1,3,4,9)",
        album_id=17,
    )

    album7_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723036761/samples/solocamp/1900x1900-000000-80-0-0_g9wahf.jpg",
        album_banner="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723702420/solocamp/1900x1900-000000-80-0-0_zsjvxt.jpg",
        background_color="rgb(1,3,4,9)",
        album_id=18,
    )

    album8_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995944/samples/solocamp/ab67616d00001e02645fed9ec66eedfb267b52f5_icdb3g.jpg",
        album_banner="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723702423/solocamp/ab67616d00001e02645fed9ec66eedfb267b52f5_rxd1rl.jpg",
        background_color="rgb(1,3,4,9)",
        album_id=19,
    )

    album9_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995861/samples/solocamp/7270401_pw1ouq.jpg",
        album_banner="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723702423/solocamp/7270401_hbb16z.jpg",
        background_color="rgb(1,3,4,9)",
        album_id=20,
    )

    album10_art = AlbumArt(
        album_art="https://res.cloudinary.com/dhukvbcqm/image/upload/v1722995945/samples/solocamp/original_zunu3s.jpg",
        album_banner="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723702420/solocamp/original_fd76de.jpg",
        background_color="rgb(1,3,4,9)",
        album_id=21,
    )



    # Blake Albums

    red_river_blue = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/blake/red_river_blue/blakeRedRiverBlue_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/blake/red_river_blue/blake_redriverblue_banner.png",
        background_color="rgb(9, 46, 62)",
        album_id=32,
    )

    pure_bs = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/blake/pure_bs/blake_pure_bs_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/blake/pure_bs/blake_pure_bs_banner.png",
        background_color="rgb(80, 100, 99)",
        album_id=33,
    )

    body_language = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/blake/body_language/Blake_Shelton_Body_Language_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/blake/body_language/blake_body_language_banner.png",
        background_color="rgb(12, 3, 1)",
        album_id=34,
    )

    based_on_a_true_story = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/blake/based_on_a_true_story/Blake-Based-On_a-True_story-album-cover.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/blake/based_on_a_true_story/blake-based-on-a-true-story-album-banner.png",
        background_color="rgb(220, 197, 147)",
        album_id=35,
    )

    startin_fires = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/blake/startin_fires/blake_startin_fires_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/blake/startin_fires/blake_startin_fires_banner.png",
        background_color="rgb(103, 88, 83)",
        album_id=36,
    )

    # Kenny G Albums

    rhythm_and_romance = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/kennyg/rhythm_and_romance/kennyg_rhythm_and_romance_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/kennyg/rhythm_and_romance/kennyg_rhythm_and_romance_banner.png",
        background_color="rgb(2, 15, 60)",
        album_id=37,
    )

    heart_and_soul = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/kennyg/heart_and_soul/kennyg_heart_and_soul_album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/kennyg/heart_and_soul/kennyg_heart_and_soul_banner.png",
        background_color="rgb(12, 32, 58)",
        album_id=38,
    )

    paradise = AlbumArt(
        album_art="https://solocamp-files.s3.amazonaws.com/kennyg/paradise/kenny_paradise-album_art.jpg",
        album_banner="https://solocamp-files.s3.amazonaws.com/kennyg/paradise/kennyg_paradise_banner.png",
        background_color="rgb(12, 11, 17)",
        album_id=39,
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

    db.session.add_all(
        [rhythm_and_romance, heart_and_soul, paradise]
    )
    db.session.add_all(
        [
            red_river_blue,
            pure_bs,
            body_language,
            based_on_a_true_story,
            startin_fires
        ]
    )



    db.session.commit()


def undo_albumarts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.album_arts RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM album_arts"))

    db.session.commit()
