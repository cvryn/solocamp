from app.models import db, environment, SCHEMA, Album, User
from sqlalchemy.sql import text


def seed_albums():

    in_tongues = Album(
        name="In Tongues",
        user_id=2,
        year=2017,
        # genre="R&B",
        genre_id=3,
        price=19.99,
        description="Joji's debut EP, In Tongues, marks the beginning of his journey as a solo artist. With its raw emotion and atmospheric production, the EP showcases Joji's talent for crafting introspective and soulful music. Tracks like 'Window' and 'Yeah Right' quickly gained popularity, establishing Joji as a rising star in the R&B scene.",
    )

    ballads_1 = Album(
        name="Ballads 1",
        user_id= 2,
        year=2018,
        # genre="R&B",
        genre_id= 3,
        price=19.99,
        description="Joji's debut album, Ballads 1, is a collection of introspective tracks exploring themes of love, loss, and the complexities of modern relationships. With its blend of soulful vocals, atmospheric production, and honest lyrics, the album resonated with listeners worldwide, solidifying Joji's status as a rising star in the music industry.",
    )
    nectar = Album(
        name="Nectar",
        user_id= 2,
        year=2020,
        # genre="R&B",
        genre_id= 3,
        price=19.99,
        description="Joji's sophomore album, Nectar, expands on his signature blend of R&B and alternative sounds, delving deeper into themes of love, desire, and the complexities of modern relationships. Featuring collaborations with high-profile artists and innovative production, Nectar showcases Joji's artistic growth and solidifies his position as a leading voice in contemporary music.",
    )
    smithereens = Album(
        name="Smithereens",
        user_id= 2,
        year=2022,
        # genre="R&B",
        genre_id= 3,
        price=19.99,
        description="Joji's third studio album, Smithereens, showcases a mature and introspective side of the artist. Blending elements of R&B and pop, the album explores themes of love, loss, and personal growth. With hits like 'Glimpse of Us,' Smithereens solidified Joji's status as a global superstar.",
    )

    # jvke
    this_is_what_blank_feels_like = Album(
        name="this is what ____ feels like (Vol. 1-4)",
        user_id=3,
        year=2022,
        # genre="Pop",
        genre_id=1,
        price=19.99,
        description="JVKE's debut album is a conceptual journey through the stages of a relationship, from falling in love to heartbreak and moving on. The album's innovative structure and introspective lyrics have garnered critical acclaim and a dedicated fanbase.",
    )

    # sam smith
    nirvana = Album(
        name="Nirvana",
        user_id=4,
        year=2013,
        # genre="Pop",
        genre_id=1,
        price=19.99,
        description="Sam Smith's debut EP, Nirvana, showcases their powerful vocals and introspective songwriting. With tracks like 'Safe with Me' and the acoustic cover of 'Latch,' the EP established Smith as a rising star in the soul and R&B scene.",
    )
    in_the_lonely_hour = Album(
        name="In the Lonely Hour",
        user_id=4,
        year=2014,
        # genre="R&B",
        genre_id=3,
        price=19.99,
        description="Sam Smith's critically acclaimed debut album, 'In the Lonely Hour,' showcases their powerful vocals and deeply personal songwriting. With hits like 'Stay with Me' and 'I'm Not the Only One,' the album explores themes of heartbreak and longing with raw emotion.",
    )

    the_thrill_of_it_all = Album(
        name="The Thrill of It All",
        user_id=4,
        year=2017,
        # genre="Pop",
        genre_id=1,
        price=19.99,
        description="Sam Smith's sophomore album, 'The Thrill of It All,' explores themes of self-discovery and emotional growth. With a blend of soulful vocals and contemporary pop production, the album showcases Smith's artistic evolution while maintaining their signature vulnerability.",
    )

    # fujii kaze
    help_ever_hurt_never = Album(
        name="HELP EVER HURT NEVER",
        user_id=5,
        year=2020,
        # genre="Pop",
        genre_id=1,
        price=19.99,
        description="Fujii Kaze's debut album, HELP EVER HURT NEVER, showcases his unique blend of R&B, hip-hop, and pop influences. With its catchy melodies, heartfelt lyrics, and innovative production, the album quickly gained popularity in Japan and beyond. The album's title, inspired by a phrase from Fujii's father, reflects the artist's positive outlook and message of hope.",
    )

    love_all_serve_all = Album(
        name="Love All Serve All",
        user_id=5,
        year=2022,
        # genre="Pop"
        genre_id=1,
        price=19.99,
        description="Fujii Kaze's sophomore album, Love All Serve All, expands on his unique blend of genres and showcases his growth as an artist. With its infectious energy and socially conscious lyrics, the album solidified his position as a leading voice in Japanese music.",
    )

    # dhruv
    rapunzel = Album(
        name="rapunzel",
        user_id=6,
        year=2022,
        # genre="Pop",
        genre_id = 1,
        price=19.99,
        description="dhruv's debut EP, 'rapunzel', is a collection of introspective and dreamy indie pop tracks. With honest lyrics and ethereal melodies, the EP explores themes of youth, love, and self-discovery. Tracks like 'double take' and 'moonlight' showcase dhruv's talent for crafting atmospheric and emotionally resonant music.",
    )
    nocturne = Album(
        name = 'Nocturne',
        user_id = 1,
        # artist_username = 'Jay',
        year = 2010,
        # genre = 'R&B',
        genre_id = 3,
        price = 100.10,
        description = 'The album was met with positive reviews from music critics upon its release. In Taiwan, it peaked at number one on the G-Music album chart for multiple weeks and was best-selling album of the year, with sales of over 280,000 copies.'
    )
    hotpot_soup = Album(
        name = 'Hotpot soup',
        user_id = 2,
        year = 2020,
        # genre = 'rap',
        genre_id = 6,
        price = 9.99,
        description = 'Cool Demo-Album created in 2011 by the infamous artist Demo-User'
    )
    lonely_dance = Album(
        name = 'Lonely dance',
        user_id = 3,
        year = 2022,
        # genre = 'electronic',
        genre_id = 4,
        price = 39.99,
        description = 'Cool Demo-Album created in 2011 by the infamous artist Demo-User'
    )
    get_away_from_me = Album(
        name = 'Get away from me',
        user_id = 4,
        year = 2021,
        # genre = 'experimental',
        genre_id = 7,
        price = 19.99,
        description = 'Cool Demo-Album created in 2011 by the infamous artist Demo-User'
    )
    shuo_ai_ni = Album(
        name = 'Shuo ai ni',
        user_id = 5,
        year = 2015,
        # genre = 'pop',
        genre_id = 1,
        price = 29.99,
        description = 'Cool Demo-Album created in 2011 by the infamous artist Demo-User'
    )
    ninja = Album(
        name = 'Ninja',
        user_id = 1,
        year = 2001,
        # genre = 'Rock',
        genre_id = 2,
        price = 10.10,
        description = 'Cool Demo-Album created in 2011 by the infamous artist Demo-User'
    )
    weiyuan_stroy = Album(
        name = 'Weiyuan Stroy',
        user_id = 2,
        year = 2021,
        # genre = 'rap',
        genre_id = 6,
        price = 29.99,
        description = 'Cool Demo-Album created in 2011 by the infamous artist Demo-User'
    )
    icekingdom = Album(
        name = 'Icekingdom',
        user_id = 3,
        year = 2023,
        # genre = 'rap',
        genre_id = 6,
        price = 39.99,
        description = 'Cool Demo-Album created in 2011 by the infamous artist Demo-User'
    )
    jasmine = Album(
        name = 'Jasmine',
        user_id = 4,
        year = 2024,
        # genre = 'R&B',
        genre_id = 3,
        price = 19.99,
        description = 'Cool Demo-Album created in 2011 by the infamous artist Demo-User'
    )
    fantasy = Album(
        name = 'Fantasy',
        user_id = 5,
        year = 2017,
        # genre = 'pop',
        genre_id = 1,
        price = 29.99,
        description = 'Cool Demo-Album created in 2011 by the infamous artist Demo-User'
    )



    # joji
    db.session.add_all([in_tongues, ballads_1, nectar, smithereens])
    # jvke
    db.session.add_all([this_is_what_blank_feels_like])
    # sam smith
    db.session.add_all(
        [
            nirvana,
            in_the_lonely_hour,
            the_thrill_of_it_all,
        ]
    )
    # fujii
    db.session.add_all([help_ever_hurt_never, love_all_serve_all])
    # dhruv
    db.session.add(rapunzel)

    db.session.add_all([nocturne,hotpot_soup, lonely_dance, get_away_from_me, shuo_ai_ni, ninja,fantasy,icekingdom,weiyuan_stroy, jasmine])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM albums"))

    db.session.commit()
