from app.models import db, environment, SCHEMA, Song
from sqlalchemy.sql import text


def seed_songs():
    will_he = Song(
        title="Will He", track_number=1, song_url="https://solocamp-files.s3.amazonaws.com/joji/in-tongues/in_tongues_will_he.m4a", album_id=1, user_id=2
    )

    pills = Song(
        title="Pills", track_number=2, song_url="https://solocamp-files.s3.amazonaws.com/joji/in-tongues/Pills.m4a", album_id=1, user_id=2
    )

    demons = Song(
        title="Demons", track_number=3, song_url="https://solocamp-files.s3.amazonaws.com/joji/in-tongues/Demons.m4a", album_id=1, user_id=2
    )

    window = Song(
        title="Window", track_number=4, song_url="https://solocamp-files.s3.amazonaws.com/joji/in-tongues/Window.m4a", album_id=1, user_id=2
    )

    bitter_fk = Song(
        title="Bitter Fk", track_number=5, song_url="https://solocamp-files.s3.amazonaws.com/joji/in-tongues/Bitter+Fk.m4a", album_id=1, user_id=2
    )

    worldstar_money = Song(
        title="Worldstar Money",
        track_number=6,
        song_url="https://solocamp-files.s3.amazonaws.com/joji/in-tongues/Worldstar+Money.m4a",
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
        song_url="https://solocamp-files.s3.amazonaws.com/joji/ballads-1/Slow+dancing+in+the+dark+kk+slider.m4a",
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
        title="I'll See You In 40", track_number=7, song_url="song_url", album_id=2, user_id=2
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
        album_id=4,
        user_id=2,
    )

    die_for_you = Song(
        title="Die For You", track_number=2, song_url="song_url", album_id=4, user_id=2
    )

    before_the_day_is_over = Song(
        title="Before The Day Is Over",
        track_number=3,
        song_url="song_url",
        album_id=4,
        user_id=2,
    )

    night_rider = Song(
        title="NIGHT RIDER", track_number=4, song_url="song_url", album_id=4, user_id=2
    )

    blahblahblah_demo = Song(
        title="BLAHBLAHBLAH DEMO",
        track_number=5,
        song_url="song_url",
        album_id=4,
        user_id=2,
    )

    am_freestyle = Song(
        title="1AM FREESTYLE",
        track_number=6,
        song_url="song_url",
        album_id=4,
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

    nocturne = Song(
        title="Nocturne", track_number=1, song_url="song_url", album_id=12, user_id=7
    )

    hotpot_soup = Song(
        title="Hotpot soup", track_number=1, song_url="song_url", album_id=13, user_id=8
    )

    lonely_dance = Song(
        title="Lonely dance",
        track_number=1,
        song_url="song_url",
        album_id=14,
        user_id=9,
    )

    get_away_from_me = Song(
        title="Get away from me",
        track_number=1,
        song_url="song_url",
        album_id=15,
        user_id=10,
    )

    shuo_ai_ni = Song(
        title="Shuo ai ni", track_number=1, song_url="song_url", album_id=16, user_id=11
    )

    ninja = Song(
        title="Ninja", track_number=1, song_url="song_url", album_id=17, user_id=7
    )
    weiyuan_story = Song(
        title="Weiyuan story",
        track_number=1,
        song_url="song_url",
        album_id=18,
        user_id=8,
    )

    icekingdom = Song(
        title="Icekingdom", track_number=1, song_url="song_url", album_id=19, user_id=9
    )

    jasmine = Song(
        title="Jasmine", track_number=1, song_url="song_url", album_id=20, user_id=10
    )

    fantasy = Song(
        title="Fantasy", track_number=1, song_url="song_url", album_id=21, user_id=11
    )

    daydreamer = Song(
        title="Daydreamer", track_number=1, song_url="song_url", album_id=22, user_id=12
    )

    best_for_last = Song(
        title="Best for Last",
        track_number=2,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )
    chasing_pavements = Song(
        title="Chasing Pavements",
        track_number=3,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )

    cold_shoulder = Song(
        title="Cold Shoulder",
        track_number=4,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )

    crazy_for_you = Song(
        title="Crazy for You",
        track_number=5,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )

    melt_my_heart_to_stone = Song(
        title="Melt My Heart to Stone",
        track_number=6,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )

    first_love = Song(
        title="First Love",
        track_number=7,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )

    right_as_rain = Song(
        title="Right as Rain",
        track_number=8,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )

    make_you_feel_my_love = Song(
        title="Make You Feel My Love",
        track_number=9,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )

    my_same = Song(
        title="My Same",
        track_number=10,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )

    tired = Song(
        title="Tired",
        track_number=11,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )

    hometown_glory = Song(
        title="Hometown Glory",
        track_number=12,
        song_url="song_url",
        album_id=22,
        user_id=12,
    )

    rolling_in_the_deep = Song(
        title="Rolling in the Deep",
        track_number=1,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    rumour_has_it = Song(
        title="Rumour Has It",
        track_number=2,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    turning_tables = Song(
        title="Turning Tables",
        track_number=3,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    dont_you_remember = Song(
        title="Don't You Remember",
        track_number=4,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    set_fire_to_the_rain = Song(
        title="Set Fire to the Rain",
        track_number=5,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    he_wont_go = Song(
        title="He Won't Go",
        track_number=6,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    take_it_all = Song(
        title="Take It All",
        track_number=7,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    ill_be_waiting = Song(
        title="I'll Be Waiting",
        track_number=8,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    one_and_only = Song(
        title="One and Only",
        track_number=9,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    lovesong = Song(
        title="Lovesong",
        track_number=10,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    someone_like_you = Song(
        title="Someone Like You",
        track_number=11,
        song_url="song_url",
        album_id=23,
        user_id=12,
    )

    bad_romance = Song(
        title="Bad Romance",
        track_number=1,
        song_url="song_url",
        album_id=24,
        user_id=13,
    )

    alejandro = Song(
        title="Alejandro",
        track_number=2,
        song_url="song_url",
        album_id=24,
        user_id=13,
    )

    monster = Song(
        title="Monster",
        track_number=3,
        song_url="song_url",
        album_id=24,
        user_id=13,
    )

    speechless = Song(
        title="Speechless",
        track_number=4,
        song_url="song_url",
        album_id=24,
        user_id=13,
    )

    dance_in_the_dark = Song(
        title="Dance in the Dark",
        track_number=5,
        song_url="song_url",
        album_id=24,
        user_id=13,
    )

    telephone = Song(
        title="Telephone",
        track_number=6,
        song_url="song_url",
        album_id=24,
        user_id=13,
    )

    so_happy_i_could_die = Song(
        title="So Happy I Could Die",
        track_number=7,
        song_url="song_url",
        album_id=24,
        user_id=13,
    )

    teeth = Song(
        title="Teeth",
        track_number=8,
        song_url="song_url",
        album_id=24,
        user_id=13,
    )

    la_vie_en_rose = Song(
        title="La Vie En Rose",
        track_number=5,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    shallow = Song(
        title="Shallow",
        track_number=12,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    music_to_my_eyes = Song(
        title="Music to My Eyes",
        track_number=14,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    diggin_my_grave = Song(
        title="Diggin' My Grave",
        track_number=15,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    always_remember_us_this_way = Song(
        title="Always Remember Us This Way",
        track_number=17,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    look_what_i_found = Song(
        title="Look What I found",
        track_number=20,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    heal_me = Song(
        title="Heal Me",
        track_number=22,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    i_dont_know_what_love_is = Song(
        title="I Don't Know What Love Is",
        track_number=23,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    is_that_alright = Song(
        title="Is That Alright?",
        track_number=25,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    why_did_you_do_that = Song(
        title="Why Did You Do That?",
        track_number=27,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    hair_body_face = Song(
        title="Hair Body Face",
        track_number=28,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    before_i_cry = Song(
        title="Before I Cry",
        track_number=30,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    ill_never_love_again = Song(
        title="I'll Never Love Again",
        track_number=33,
        song_url="song_url",
        album_id=25,
        user_id=13,
    )

    kaleidoscope = Song(
        title="Kaleidoscope",
        track_number=1,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    escape_me = Song(
        title="Escape Me",
        track_number=2,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    you_are_my_diamond = Song(
        title="You Are My Diamond",
        track_number=3,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    i_will_be_here = Song(
        title="I Will Be Here",
        track_number=4,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    i_am_strong = Song(
        title="I Am Strong",
        track_number=5,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    here_on_earth = Song(
        title="Here on Earth",
        track_number=6,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    always_near = Song(
        title="Always Near",
        track_number=7,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    its_not_the_things_you_say = Song(
        title="It's Not the Things You Say",
        track_number=8,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    fresh_fruit = Song(
        title="Fresh Fruit",
        track_number=9,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    century = Song(
        title="Century",
        track_number=10,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    feel_it_in_my_bones = Song(
        title="Feel It in My Bones",
        track_number=11,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    who_wants_to_be_alone = Song(
        title="Who Wants to Be Alone",
        track_number=12,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    la_ride = Song(
        title="LA Ride",
        track_number=13,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    bend_it_like_you_dont_care = Song(
        title="Bend It Like You Don't Care",
        track_number=14,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    knock_you_out = Song(
        title="Knock You Out",
        track_number=15,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    louder_than_boom = Song(
        title="Louder than Boom",
        track_number=16,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    surrounded_by_light = Song(
        title="Surrounded By Light",
        track_number=17,
        song_url="song_url",
        album_id=26,
        user_id=14,
    )

    ten_seconds_before_sunrise = Song(
        title="Ten Seconds Before Sunrise",
        track_number=1,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    everything = Song(
        title="Everything",
        track_number=2,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    do_you_feel_me = Song(
        title="Do You Feel Me",
        track_number=3,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    carpe_noctum = Song(
        title="Carpe Noctum",
        track_number=4,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    driving_to_heaven = Song(
        title="Driving to Heaven",
        track_number=5,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    sweet_things = Song(
        title="Sweet Things",
        track_number=6,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    bright_morningstar = Song(
        title="Bright Morningstar",
        track_number=7,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    break_my_fall = Song(
        title="Break My Fall",
        track_number=8,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    in_the_dark = Song(
        title="In the Dark",
        track_number=9,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    dance_4_life = Song(
        title="Dance 4 Life",
        track_number=10,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    elements_of_life = Song(
        title="Elements of Life",
        track_number=11,
        song_url="song_url",
        album_id=27,
        user_id=14,
    )

    around_the_world = Song(
        title="Around the World",
        track_number=1,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    parallel_universe = Song(
        title="Parallel Universe",
        track_number=2,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    scar_tissue = Song(
        title="Scar Tissue",
        track_number=3,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    otherside = Song(
        title="Otherside",
        track_number=4,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    get_on_top = Song(
        title="Get on Top",
        track_number=5,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    californication = Song(
        title="Californication",
        track_number=6,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    easily = Song(
        title="Easily",
        track_number=7,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    procelain = Song(
        title="Porcelain",
        track_number=8,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    emit_renmus = Song(
        title="Emit Renmus",
        track_number=9,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    i_like_dirt = Song(
        title="I Like Dirt",
        track_number=10,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    this_velvet_glove = Song(
        title="This Velvet Glove",
        track_number=11,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    savior = Song(
        title="Savior",
        track_number=12,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    purple_stain = Song(
        title="Purple Stain",
        track_number=13,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    right_on_time = Song(
        title="Right on Time",
        track_number=14,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    road_trippin = Song(
        title="Road Trippin'",
        track_number=15,
        song_url="song_url",
        album_id=28,
        user_id=15,
    )

    by_the_way = Song(
        title="By the Way",
        track_number=1,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    universally_speaking = Song(
        title="Universally Speaking",
        track_number=2,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    this_is_the_place = Song(
        title="This Is the Place",
        track_number=3,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    dosed = Song(
        title="Dosed",
        track_number=4,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    dont_forget_me = Song(
        title="Don't Forget Me",
        track_number=5,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    the_zephyr_song = Song(
        title="The Zephyr Song",
        track_number=6,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    cant_stop = Song(
        title="Can't Stop",
        track_number=7,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    i_could_die_for_you = Song(
        title="I Could Die for You",
        track_number=8,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    midnight = Song(
        title="Midnight",
        track_number=9,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    throw_away_your_television = Song(
        title="Throw Away Your Television",
        track_number=10,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    c____n = Song(
        title="C****n",
        track_number=11,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    tear = Song(
        title="Tear",
        track_number=12,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    on_mercury = Song(
        title="On Mercury",
        track_number=13,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    minor_thing = Song(
        title="Minor Thing",
        track_number=14,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    warm_tape = Song(
        title="Warm Tape",
        track_number=15,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    venice_queen = Song(
        title="Venice Queen",
        track_number=16,
        song_url="song_url",
        album_id=29,
        user_id=15,
    )

    dig_it_all = Song(
        title="Dig It All",
        track_number=1,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    flashing_lights = Song(
        title="Flashing Lights",
        track_number=2,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    dynamik = Song(
        title="Dynamik",
        track_number=3,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    alright_2010 = Song(
        title="Alright 2010",
        track_number=4,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    sfinx = Song(
        title="Sfinx",
        track_number=5,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    voyage = Song(
        title="Voyage",
        track_number=6,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    lalaland = Song(
        title="Lalaland",
        track_number=7,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    molotov = Song(
        title="Molotov",
        track_number=8,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    asteroid = Song(
        title="Asteroid",
        track_number=9,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    switched = Song(
        title="Switched",
        track_number=10,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    reaver = Song(
        title="Reaver",
        track_number=11,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    lump = Song(
        title="Lump",
        track_number=12,
        song_url="song_url",
        album_id=30,
        user_id=16,
    )

    eclipse = Song(
        title="Eclipse",
        track_number=1,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    follow_me = Song(
        title="Follow Me",
        track_number=2,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    sally = Song(
        title="Sally",
        track_number=3,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    let_me_be_your_home = Song(
        title="Let Me Be Your Home",
        track_number=4,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    colors = Song(
        title="Colors",
        track_number=5,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    where_is_here_now = Song(
        title="Where Is Here Now",
        track_number=6,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    united_we_are = Song(
        title="United We Are",
        track_number=7,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    dont_stop_the_madness = Song(
        title="Don't Stop the Madness",
        track_number=8,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    young_again = Song(
        title="Young Again",
        track_number=9,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    echo = Song(
        title="Echo",
        track_number=10,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    arcadia = Song(
        title="Arcadia",
        track_number=11,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    area51 = Song(
        title="Area51",
        track_number=12,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    nothing_can_hold_us_down = Song(
        title="Nothing Can Hold Us Down",
        track_number=13,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    birds_fly = Song(
        title="Birds Fly",
        track_number=14,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    dare_you = Song(
        title="Dare You",
        track_number=15,
        song_url="song_url",
        album_id=31,
        user_id=16,
    )

    # #32 Blake - Red River Blue
    honey_bee = Song(
        title="Honey Bee",
        track_number=1,
        song_url="song_url",
        album_id=32,
        user_id=18,
    )

    ready_to_roll = Song(
        title="Ready To Roll",
        track_number=2,
        song_url="song_url",
        album_id=32,
        user_id=18,
    )

    god_gave_me_you = Song(
        title="God Gave Me You",
        track_number=3,
        song_url="song_url",
        album_id=32,
        user_id=18,
    )

    get_some = Song(
        title="Get Some",
        track_number=4,
        song_url="song_url",
        album_id=32,
        user_id=18,
    )

    drink_on_it = Song(
        title="Drink On It",
        track_number=5,
        song_url="song_url",
        album_id=32,
        user_id=18,
    )

    # 33 blake - pure bs

    cant_be_good = Song(
        title="Can't Be Good",
        track_number=1,
        song_url="song_url",
        album_id=33,
        user_id=18,
    )

    dont_make_me = Song(
        title="Don't Make Me",
        track_number=2,
        song_url="song_url",
        album_id=33,
        user_id=18,
    )

    the_more_i_drink = Song(
        title="The More I Drink",
        track_number=3,
        song_url="song_url",
        album_id=33,
        user_id=18,
    )
    i_dont_care = Song(
        title="I Don't Care",
        track_number=4,
        song_url="song_url",
        album_id=33,
        user_id=18,
    )
    she_dont_love_me = Song(
        title="She Don't Love Me",
        track_number=5,
        song_url="song_url",
        album_id=33,
        user_id=18,
    )

    # 34 body language

    minimum_wage = Song(
        title="Minimum Wage",
        track_number=1,
        song_url="song_url",
        album_id=34,
        user_id=18,
    )

    body_language = Song(
        title="Body Language",
        track_number=2,
        song_url="song_url",
        album_id=34,
        user_id=18,
    )

    happy_anywhere = Song(
        title="Happy Anywhere",
        track_number=3,
        song_url="song_url",
        album_id=34,
        user_id=18,
    )

    now_i_dont = Song(
        title="Now I Don't",
        track_number=4,
        song_url="song_url",
        album_id=34,
        user_id=18,
    )

    monday_mornin_missin_you = Song(
        title="Monday Mornin' Missin' You",
        track_number=5,
        song_url="song_url",
        album_id=34,
        user_id=18,
    )

    # 35 based on a true story
    boys_round_here = Song(
        title="Boys 'Round Here",
        track_number=1,
        song_url="song_url",
        album_id=35,
        user_id=18,
    )

    sure_be_cool_if_you_did = Song(
        title="Sure Be Cool If You Did",
        track_number=2,
        song_url="song_url",
        album_id=35,
        user_id=18,
    )

    do_you_remember = Song(
        title="Do You Remember",
        track_number=3,
        song_url="song_url",
        album_id=35,
        user_id=18,
    )

    small_town_big_time = Song(
        title="Small Town Big Time",
        track_number=4,
        song_url="song_url",
        album_id=35,
        user_id=18,
    )

    country_on_the_radio = Song(
        title="Country On The Radio",
        track_number=5,
        song_url="song_url",
        album_id=35,
        user_id=18,
    )

    # 36 startin fires

    green = Song(
        title="Green",
        track_number=1,
        song_url="song_url",
        album_id=36,
        user_id=18,
    )

    good_at_startin_fires = Song(
        title="Good At Startin' Fires",
        track_number=2,
        song_url="song_url",
        album_id=36,
        user_id=18,
    )

    she_wouldnt_be_gone = Song(
        title="She Wouldn't Be Gone",
        track_number=3,
        song_url="song_url",
        album_id=36,
        user_id=18,
    )

    ill_just_hold_on = Song(
        title="I'll Just Hold On",
        track_number=4,
        song_url="song_url",
        album_id=36,
        user_id=18,
    )

    miles = Song(
        title="Miles",
        track_number=5,
        song_url="song_url",
        album_id=36,
        user_id=18,
    )

    # 37 rhythm and romance
    sax_o_loco = Song(
        title="Sax-O-Loco",
        track_number=1,
        song_url="song_url",
        album_id=37,
        user_id=17,
    )

    ritmo_y_romance = Song(
        title="Ritmo Y Romance",
        track_number=2,
        song_url="song_url",
        album_id=37,
        user_id=17,
    )

    sabor_a_mi = Song(
        title="Sabor A Mi",
        track_number=3,
        song_url="song_url",
        album_id=37,
        user_id=17,
    )

    tango = Song(
        title="Tango",
        track_number=4,
        song_url="song_url",
        album_id=37,
        user_id=17,
    )

    mirame_bailar = Song(
        title="Mirame Bailar",
        track_number=5,
        song_url="song_url",
        album_id=37,
        user_id=17,
    )

    # heart and soul

    heart_and_soul = Song(
        title="Heart and Soul",
        track_number=1,
        song_url="song_url",
        album_id=38,
        user_id=17,
    )

    deja_vu = Song(
        title="Deja Vu",
        track_number=2,
        song_url="song_url",
        album_id=38,
        user_id=17,
    )

    fall_again = Song(
        title="Fall Again",
        track_number=3,
        song_url="song_url",
        album_id=38,
        user_id=17,
    )

    letters_from_home = Song(
        title="Letters From Home",
        track_number=4,
        song_url="song_url",
        album_id=38,
        user_id=17,
    )

    the_promise = Song(
        title="The Promise",
        track_number=5,
        song_url="song_url",
        album_id=38,
        user_id=17,
    )

    # paradise

    brazil = Song(
        title="Brazil",
        track_number=1,
        song_url="song_url",
        album_id=39,
        user_id=17,
    )

    paradise = Song(
        title="Paradise",
        track_number=2,
        song_url="song_url",
        album_id=39,
        user_id=17,
    )

    malibu_dreams = Song(
        title="Malibu Dreams",
        track_number=3,
        song_url="song_url",
        album_id=39,
        user_id=17,
    )

    one_more_time = Song(
        title="One More Time",
        track_number=4,
        song_url="song_url",
        album_id=39,
        user_id=17,
    )

    spanish_nights = Song(
        title="Spanish Nights",
        track_number=5,
        song_url="song_url",
        album_id=39,
        user_id=17,
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

    db.session.add_all(
        [
            nocturne,
            hotpot_soup,
            lonely_dance,
            get_away_from_me,
            shuo_ai_ni,
            ninja,
            fantasy,
            icekingdom,
            weiyuan_story,
            jasmine,
        ]
    )

    db.session.add_all(
        [
            daydreamer,
            best_for_last,
            chasing_pavements,
            cold_shoulder,
            crazy_for_you,
            melt_my_heart_to_stone,
            first_love,
            right_as_rain,
            make_you_feel_my_love,
            my_same,
            tired,
            hometown_glory,
        ]
    )

    db.session.add_all(
        [
            rolling_in_the_deep,
            rumour_has_it,
            turning_tables,
            dont_you_remember,
            set_fire_to_the_rain,
            he_wont_go,
            take_it_all,
            ill_be_waiting,
            one_and_only,
            lovesong,
            someone_like_you,
        ]
    )

    db.session.add_all(
        [
            bad_romance,
            alejandro,
            monster,
            speechless,
            dance_in_the_dark,
            telephone,
            so_happy_i_could_die,
            teeth,
        ]
    )

    db.session.add_all(
        [
            la_vie_en_rose,
            shallow,
            music_to_my_eyes,
            diggin_my_grave,
            always_remember_us_this_way,
            look_what_i_found,
            heal_me,
            i_dont_know_what_love_is,
            is_that_alright,
            why_did_you_do_that,
            hair_body_face,
            before_i_cry,
            ill_never_love_again,
        ]
    )

    db.session.add_all(
        [
            ten_seconds_before_sunrise,
            everything,
            do_you_feel_me,
            carpe_noctum,
            driving_to_heaven,
            sweet_things,
            bright_morningstar,
            break_my_fall,
            in_the_dark,
            dance_4_life,
            elements_of_life,
        ]
    )

    db.session.add_all(
        [
            kaleidoscope,
            escape_me,
            you_are_my_diamond,
            i_will_be_here,
            i_am_strong,
            here_on_earth,
            always_near,
            its_not_the_things_you_say,
            fresh_fruit,
            century,
            feel_it_in_my_bones,
            who_wants_to_be_alone,
            la_ride,
            bend_it_like_you_dont_care,
            knock_you_out,
            louder_than_boom,
            surrounded_by_light,
        ]
    )

    db.session.add_all(
        [
            around_the_world,
            parallel_universe,
            scar_tissue,
            otherside,
            get_on_top,
            californication,
            easily,
            procelain,
            emit_renmus,
            i_like_dirt,
            this_velvet_glove,
            savior,
            purple_stain,
            right_on_time,
            road_trippin,
        ]
    )

    db.session.add_all(
        [
            by_the_way,
            universally_speaking,
            this_is_the_place,
            dosed,
            dont_forget_me,
            the_zephyr_song,
            cant_stop,
            i_could_die_for_you,
            midnight,
            throw_away_your_television,
            c____n,
            tear,
            on_mercury,
            minor_thing,
            warm_tape,
            venice_queen,
        ]
    )

    db.session.add_all(
        [
            dig_it_all,
            flashing_lights,
            dynamik,
            alright_2010,
            sfinx,
            voyage,
            lalaland,
            molotov,
            asteroid,
            switched,
            reaver,
            lump,
        ]
    )

    db.session.add_all(
        [
            eclipse,
            follow_me,
            sally,
            let_me_be_your_home,
            colors,
            where_is_here_now,
            united_we_are,
            dont_stop_the_madness,
            young_again,
            echo,
            arcadia,
            area51,
            nothing_can_hold_us_down,
            birds_fly,
            dare_you,
        ]
    )

    # Blake - red river blue
    db.session.add_all(
        [
            honey_bee,
            ready_to_roll,
            god_gave_me_you,
            get_some,
            drink_on_it
        ]
    )

    # pure bs
    db.session.add_all(
        [
            cant_be_good,
            dont_make_me,
            the_more_i_drink,
            i_dont_care,
            she_dont_love_me
        ]
    )

    # body language
    db.session.add_all(
        [
            minimum_wage,
            body_language,
            happy_anywhere,
            now_i_dont,
            monday_mornin_missin_you

        ]
    )

    # based on a true story
    db.session.add_all(
        [
            boys_round_here,
            sure_be_cool_if_you_did,
            do_you_remember,
            small_town_big_time,
            country_on_the_radio

        ]
    )

    # startin fires
    db.session.add_all(
        [
            green,
            good_at_startin_fires,
            she_wouldnt_be_gone,
            ill_just_hold_on,
            miles

        ]
    )

    # rhythm and romance
    db.session.add_all(
        [
            sax_o_loco,
            ritmo_y_romance,
            sabor_a_mi,
            tango,
            mirame_bailar
        ]
    )

    # heart and soul
    db.session.add_all(
        [
            heart_and_soul,
            deja_vu,
            fall_again,
            letters_from_home,
            the_promise
        ]
    )

    # paradise
    db.session.add_all(
        [
            brazil,
            paradise,
            malibu_dreams,
            one_more_time,
            spanish_nights
        ]
    )
    db.session.commit()


def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songs"))

    db.session.commit()
