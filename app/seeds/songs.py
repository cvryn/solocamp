from app.models import db, environment, SCHEMA, Song
from sqlalchemy.sql import text


def seed_songs():

    will_he = Song(
        title="Will He", track_number=1, song_url="song_url", album_id=1, user_id=2
    )
    pills = Song(
        title="Pills", track_number=2, song_url="song_url", album_id=1, user_id=2
    )
    demons = Song(
        title="Demons", track_number=3, song_url="song_url", album_id=1, user_id=2
    )
    window = Song(
        title="Window", track_number=4, song_url="song_url", album_id=1, user_id=2
    )
    bitter_fk = Song(
        title="Bitter Fk", track_number=5, song_url="song_url", album_id=1, user_id=2
    )
    worldstar_money = Song(
        title="Worldstar Money",
        track_number=6,
        song_url="song_url",
        album_id=1,
        user_id=2,
    )

    # ballads 1
    attention = Song(
        title="Attention", track_number=1, song_url="song_url", album_id=2, user_id=2
    )
    slow_dancing_in_the_dark = Song(
        title="Slow Dancing in the Dark",
        track_number=2,
        song_url="song_url",
        album_id=2,
        user_id=2,
    )
    test_drive = Song(
        title="Test Drive", track_number=3, song_url="song_url", album_id=2, user_id=2
    )
    cant_get_over_you = Song(
        title="Can't Get Over You",
        track_number=4,
        song_url="song_url",
        album_id=2,
        user_id=2,
    )
    yeah_right = Song(
        title="Yeah Right", track_number=5, song_url="song_url", album_id=2, user_id=2
    )
    no_fun = Song(
        title="No Fun", track_number=6, song_url="song_url", album_id=2, user_id=2
    )
    ill_see_you_in_40 = Song(
        title="Test Drive", track_number=7, song_url="song_url", album_id=2, user_id=2
    )

    # Nectar
    ew = Song(title="Ew", track_number=1, song_url="song_url", album_id=3, user_id=2)
    modus = Song(
        title="Modus", track_number=2, song_url="song_url", album_id=3, user_id=2
    )
    run = Song(title="Run", track_number=3, song_url="song_url", album_id=3, user_id=2)
    nitrous = Song(
        title="Nitrous", track_number=4, song_url="song_url", album_id=3, user_id=2
    )
    normal_people = Song(
        title="Normal People",
        track_number=5,
        song_url="song_url",
        album_id=3,
        user_id=2,
    )
    afterthought = Song(
        title="Afterthought", track_number=6, song_url="song_url", album_id=3, user_id=2
    )

    # Smithereens
    feeling_like_the_end = Song(
        title="Feeling Like The End",
        track_number=1,
        song_url="song_url",
        album_id=5,
        user_id=2,
    )
    die_for_you = Song(
        title="Die For You", track_number=2, song_url="song_url", album_id=5, user_id=2
    )
    before_the_day_is_over = Song(
        title="Before The Day Is Over",
        track_number=3,
        song_url="song_url",
        album_id=5,
        user_id=2,
    )
    night_rider = Song(
        title="NIGHT RIDER", track_number=4, song_url="song_url", album_id=5, user_id=2
    )
    blahblahblah_demo = Song(
        title="BLAHBLAHBLAH DEMO",
        track_number=5,
        song_url="song_url",
        album_id=5,
        user_id=2,
    )
    am_freestyle = Song(
        title="1AM FREESTYLE",
        track_number=6,
        song_url="song_url",
        album_id=5,
        user_id=2,
    )

    # this is what ____ feels like (Vol. 1-4)
    this_is_what_falling_in_love_feels_like = Song(
        title="this is what falling in love feels like",
        track_number=1,
        song_url="song_url",
        album_id=5,
        user_id=3,
    )
    moon_and_back = Song(
        title="moon and back",
        track_number=2,
        song_url="song_url",
        album_id=5,
        user_id=3,
    )

    golden_hour = Song(
        title="Golden Hour", track_number=3, song_url="song_url", album_id=5, user_id=3
    )
    im_not_okay = Song(
        title="im not okay", track_number=4, song_url="song_url", album_id=5, user_id=3
    )
    this_is_what_sadness_feels_like = Song(
        title="this is what sadness feels like",
        track_number=5,
        song_url="song_url",
        album_id=5,
        user_id=3,
    )

    # Sam Smith - Nirvana (EP)
    safe_with_me = Song(
        title="Safe with Me", track_number=1, song_url="song_url", album_id=6, user_id=4
    )
    nirvana = Song(
        title="Nirvana", track_number=2, song_url="song_url", album_id=6, user_id=4
    )
    latch_acoustic = Song(
        title="Latch (Acoustic)",
        track_number=3,
        song_url="song_url",
        album_id=6,
        user_id=4,
    )
    together = Song(
        title="Together", track_number=4, song_url="song_url", album_id=6, user_id=4
    )

    # Sam Smith - In The Lonely Hours
    stay_with_me = Song(
        title="Stay With Me", track_number=1, song_url="song_url", album_id=7, user_id=4
    )
    im_not_the_only_one = Song(
        title="I'm Not The Only One",
        track_number=2,
        song_url="song_url",
        album_id=7,
        user_id=4,
    )
    ive_told_you_now = Song(
        title="I've Told You now",
        track_number=3,
        song_url="song_url",
        album_id=7,
        user_id=4,
    )
    life_support = Song(
        title="Life Support", track_number=4, song_url="song_url", album_id=7, user_id=4
    )
    lay_me_down = Song(
        title="Lay Me Down", track_number=5, song_url="song_url", album_id=7, user_id=4
    )

    # Sam Smith - The Thrill Of It All
    too_good_at_goodbyes = Song(
        title="Too Good at Goodbyes",
        track_number=1,
        song_url="song_url",
        album_id=8,
        user_id=4,
    )
    say_it_first = Song(
        title="Say It First", track_number=2, song_url="song_url", album_id=8, user_id=4
    )
    one_last_song = Song(
        title="One Last Song",
        track_number=3,
        song_url="song_url",
        album_id=8,
        user_id=4,
    )
    baby_you_make_me_crazy = Song(
        title="Baby, You Make Me Crazy",
        track_number=4,
        song_url="song_url",
        album_id=8,
        user_id=4,
    )
    pray = Song(
        title="Pray", track_number=5, song_url="song_url", album_id=8, user_id=4
    )

    # Fujii Kaze - HELP EVER HURT NEVER
    nan_nan = Song(
        title="Nan-Nan", track_number=1, song_url="song_url", album_id=9, user_id=5
    )
    yasashisa = Song(
        title="YASASHISA", track_number=2, song_url="song_url", album_id=9, user_id=5
    )
    kiri_ga_naikara = Song(
        title="Kiri Ga Naikara",
        track_number=3,
        song_url="song_url",
        album_id=9,
        user_id=5,
    )
    shinunoga_e_wa = Song(
        title="Shinunoga E-Wa",
        track_number=4,
        song_url="song_url",
        album_id=9,
        user_id=5,
    )
    kaerou = Song(
        title="Kaerou", track_number=5, song_url="song_url", album_id=9, user_id=5
    )

    # Fujii Kaze - LOVE ALL SERVE ALL
    matsuri = Song(
        title="Matsuri", track_number=1, song_url="song_url", album_id=10, user_id=5
    )
    hedemo_ne_yo = Song(
        title="Hedemo Ne-Yo",
        track_number=2,
        song_url="song_url",
        album_id=10,
        user_id=5,
    )
    yaba = Song(
        title="YABA", track_number=3, song_url="song_url", album_id=10, user_id=5
    )
    mo_eh_yo = Song(
        title="MO-EH-YO", track_number=4, song_url="song_url", album_id=10, user_id=5
    )
    garden = Song(
        title="Garden", track_number=5, song_url="song_url", album_id=10, user_id=5
    )
    seishun_sick = Song(
        title="Seishun Sick",
        track_number=6,
        song_url="song_url",
        album_id=10,
        user_id=5,
    )

    # dhruv - rapunzel
    moonlight = Song(
        title="moonlight", track_number=1, song_url="song_url", album_id=11, user_id=6
    )
    double_take = Song(
        title="double take", track_number=2, song_url="song_url", album_id=11, user_id=6
    )
    airplane_thoughts = Song(
        title="airplane thoughts",
        track_number=3,
        song_url="song_url",
        album_id=11,
        user_id=6,
    )
    vulnerable = Song(
        title="vulnerable", track_number=4, song_url="song_url", album_id=11, user_id=6
    )
    stable_life = Song(
        title="stable life", track_number=5, song_url="song_url", album_id=11, user_id=6
    )
    grateful = Song(
        title="grateful", track_number=6, song_url="song_url", album_id=11, user_id=6
    )

    # in tongues
    db.session.add_all(
        [
            will_he,
            pills,
            demons,
            window,
            bitter_fk,
            worldstar_money,
        ]
    )

    # ballads 1

    db.session.add_all(
        [
            attention,
            slow_dancing_in_the_dark,
            test_drive,
            cant_get_over_you,
            yeah_right,
            no_fun,
            ill_see_you_in_40,
        ]
    )
    # Nectar
    db.session.add_all(
        [
            ew,
            modus,
            run,
            nitrous,
            normal_people,
            afterthought,
        ]
    )

    # Smithereens
    db.session.add_all(
        [
            feeling_like_the_end,
            die_for_you,
            before_the_day_is_over,
            night_rider,
            blahblahblah_demo,
            am_freestyle,
        ]
    )

    # this is what ____ feels like (Vol. 1-4) by JVKE
    db.session.add_all(
        [
            this_is_what_falling_in_love_feels_like,
            moon_and_back,
            golden_hour,
            im_not_okay,
            this_is_what_sadness_feels_like,
        ]
    )

    # Nirvana
    db.session.add_all(
        [
            safe_with_me,
            nirvana,
            latch_acoustic,
            together,
        ]
    )

    # In the Lonely Hour
    db.session.add_all(
        [
            stay_with_me,
            im_not_the_only_one,
            ive_told_you_now,
            life_support,
            lay_me_down,
        ]
    )

    # The Thrill of It All
    db.session.add_all(
        [
            too_good_at_goodbyes,
            say_it_first,
            one_last_song,
            baby_you_make_me_crazy,
            pray,
        ]
    )

    # HELP EVER HURT NEVER
    db.session.add_all(
        [
            nan_nan,
            yasashisa,
            kiri_ga_naikara,
            shinunoga_e_wa,
            kaerou,
        ]
    )

    # LOVE ALL SERVE ALL
    db.session.add_all(
        [
            matsuri,
            hedemo_ne_yo,
            yaba,
            mo_eh_yo,
            garden,
            seishun_sick,
        ]
    )

    # rapunzel
    db.session.add_all(
        [
            moonlight,
            double_take,
            airplane_thoughts,
            vulnerable,
            stable_life,
            grateful,
        ]
    )

    db.session.commit()


def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM song"))

    db.session.commit()
