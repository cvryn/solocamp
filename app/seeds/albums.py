from app.models import db, environment, SCHEMA, Album
from sqlalchemy.sql import text


def seed_albums():
    in_tongues = Album(
        name="In Tongues",
        user_id=2,
        year=2017,
        genre="r&b",
        price=19.99,
        description="Joji's debut EP, In Tongues, marks the beginning of his journey as a solo artist. With its raw emotion and atmospheric production, the EP showcases Joji's talent for crafting introspective and soulful music. Tracks like 'Window' and 'Yeah Right' quickly gained popularity, establishing Joji as a rising star in the R&B scene.",
    )

    ballads_1 = Album(
        name="Ballads 1",
        user_id=2,
        year=2018,
        genre="r&b",
        price=10.99,
        description="Joji's debut album, Ballads 1, is a collection of introspective tracks exploring themes of love, loss, and the complexities of modern relationships. With its blend of soulful vocals, atmospheric production, and honest lyrics, the album resonated with listeners worldwide, solidifying Joji's status as a rising star in the music industry.",
    )

    nectar = Album(
        name="Nectar",
        user_id=2,
        year=2020,
        genre="r&b",
        price=19.00,
        description="Joji's sophomore album, Nectar, expands on his signature blend of R&B and alternative sounds, delving deeper into themes of love, desire, and the complexities of modern relationships. Featuring collaborations with high-profile artists and innovative production, Nectar showcases Joji's artistic growth and solidifies his position as a leading voice in contemporary music.",
    )

    smithereens = Album(
        name="Smithereens",
        user_id=2,
        year=2022,
        genre="r&b",
        price=18.99,
        description="Joji's third studio album, Smithereens, showcases a mature and introspective side of the artist. Blending elements of R&B and pop, the album explores themes of love, loss, and personal growth. With hits like 'Glimpse of Us,' Smithereens solidified Joji's status as a global superstar.",
    )

    # jvke
    this_is_what_blank_feels_like = Album(
        name="this is what ____ feels like (Vol. 1-4)",
        user_id=3,
        year=2022,
        genre="pop",
        price=17.69,
        description="JVKE's debut album is a conceptual journey through the stages of a relationship, from falling in love to heartbreak and moving on. The album's innovative structure and introspective lyrics have garnered critical acclaim and a dedicated fanbase.",
    )

    # sam smith
    nirvana = Album(
        name="Nirvana",
        user_id=4,
        year=2013,
        genre="pop",
        price=12.55,
        description="Sam Smith's debut EP, Nirvana, showcases their powerful vocals and introspective songwriting. With tracks like 'Safe with Me' and the acoustic cover of 'Latch,' the EP established Smith as a rising star in the soul and R&B scene.",
    )

    in_the_lonely_hour = Album(
        name="In the Lonely Hour",
        user_id=4,
        year=2014,
        genre="r&b",
        price=9.99,
        description="Sam Smith's critically acclaimed debut album, 'In the Lonely Hour,' showcases their powerful vocals and deeply personal songwriting. With hits like 'Stay with Me' and 'I'm Not the Only One,' the album explores themes of heartbreak and longing with raw emotion.",
    )

    the_thrill_of_it_all = Album(
        name="The Thrill of It All",
        user_id=4,
        year=2017,
        genre="pop",
        price=21.99,
        description="Sam Smith's sophomore album, 'The Thrill of It All,' explores themes of self-discovery and emotional growth. With a blend of soulful vocals and contemporary pop production, the album showcases Smith's artistic evolution while maintaining their signature vulnerability.",
    )

    # fujii kaze
    help_ever_hurt_never = Album(
        name="HELP EVER HURT NEVER",
        user_id=5,
        year=2020,
        genre="pop",
        price=11.98,
        description="Fujii Kaze's debut album, HELP EVER HURT NEVER, showcases his unique blend of R&B, hip-hop, and pop influences. With its catchy melodies, heartfelt lyrics, and innovative production, the album quickly gained popularity in Japan and beyond. The album's title, inspired by a phrase from Fujii's father, reflects the artist's positive outlook and message of hope.",
    )

    love_all_serve_all = Album(
        name="Love All Serve All",
        user_id=5,
        year=2022,
        genre="pop",
        price=19.96,
        description="Fujii Kaze's sophomore album, Love All Serve All, expands on his unique blend of genres and showcases his growth as an artist. With its infectious energy and socially conscious lyrics, the album solidified his position as a leading voice in Japanese music.",
    )

    # dhruv
    rapunzel = Album(
        name="rapunzel",
        user_id=6,
        year=2022,
        genre="pop",
        price=22.98,
        description="dhruv's debut EP, 'rapunzel', is a collection of introspective and dreamy indie pop tracks. With honest lyrics and ethereal melodies, the EP explores themes of youth, love, and self-discovery. Tracks like 'double take' and 'moonlight' showcase dhruv's talent for crafting atmospheric and emotionally resonant music.",
    )

    nocturne = Album(
        name="Nocturne",
        user_id=7,
        year=2010,
        genre="r&b",
        price=100.25,
        description="Jay's album was met with positive reviews from music critics upon its release. In Taiwan, it peaked at number one on the G-Music album chart for multiple weeks and was best-selling album of the year, with sales of over 280,000 copies.",
    )

    hotpot_soup = Album(
        name="Hotpot soup",
        user_id=8,
        year=2020,
        genre="rap",
        price=9.99,
        description="This is a hard-hitting rap album that dives deep into the gritty realities of city life, blending raw lyrical prowess with infectious beats.",
    )

    lonely_dance = Album(
        name="Lonely dance",
        user_id=9,
        year=2022,
        genre="electronic",
        price=39.99,
        description="In this album, each track tells a unique story, from the struggles of growing up in tough neighborhoods to the triumphs of overcoming adversity.",
    )

    get_away_from_me = Album(
        name="Get away from me",
        user_id=10,
        year=2021,
        genre="experimental",
        price=19.99,
        description="The album features a mix of introspective verses and high-energy anthems, with collaborations from some of the hottest names in the rap game. ",
    )

    shuo_ai_ni = Album(
        name="Shuo ai ni",
        user_id=11,
        year=2015,
        genre="pop",
        price=29.99,
        description="This album invites listeners to lose themselves in the music, dancing under the metaphorical stars and feeling the echoes of every note long after the music fades.",
    )

    ninja = Album(
        name="Ninja",
        user_id=7,
        year=2001,
        genre="rock",
        price=10.10,
        description="From uplifting anthems to heartfelt ballads, It is a celebration of the highs and lows of life, designed to make you move, sing along, and feel every beat.",
    )

    weiyuan_story = Album(
        name="Weiyuan Story",
        user_id=8,
        year=2021,
        genre="rap",
        price=29.99,
        description="The album explores themes of love, self-discovery, and the thrill of living in the moment, all wrapped up in polished production and dance-worthy beats.",
    )

    icekingdom = Album(
        name="Icekingdom",
        user_id=9,
        year=2023,
        genre="rap",
        price=39.99,
        description="With its powerful narratives and diverse soundscapes, It captures the essence of the streets, making it a must-listen for fans of authentic, unfiltered hip-hop.",
    )

    jasmine = Album(
        name="Jasmine",
        user_id=10,
        year=2024,
        genre="r&b",
        price=19.99,
        description="Jasmine is a captivating pop album that blends the sparkle of celestial melodies with deep, resonant emotions. Each track is a sonic journey, where lush vocal harmonies meet shimmering electronic beats, creating a soundscape that's both dreamy and invigorating.",
    )

    fantasy = Album(
        name="Fantasy",
        user_id=11,
        year=2017,
        genre="pop",
        price=29.99,
        description="Fantasy is a vibrant pop album that takes listeners on a journey through the electric pulse of modern life. Filled with catchy hooks, infectious melodies, and shimmering synths, each track offers a burst of energy and emotion.",
    )

    nineteen = Album(
        name="19",
        user_id=12,
        year=2008,
        genre="pop",
        price=7.48,
        description='Adele\'s debut album, 19, is a raw and emotional exploration of heartbreak and love. Released when she was just 19, the album showcases her extraordinary vocal talent and songwriting maturity beyond her years. With its soulful melodies and honest lyrics, 19 quickly propelled Adele to stardom. The album delves deep into the complexities of young love, loss, and longing, resonating with listeners on a profound level. Tracks like "Chasing Pavements," "Hometown Glory," and "Someone Like You" became instant classics, showcasing Adele\'s powerful voice and her ability to convey raw emotion.',
    )

    twenty_one = Album(
        name="21",
        user_id=12,
        year=2011,
        genre="pop",
        price=11.98,
        description='Adele\'s 21 is a groundbreaking album that catapulted her to global superstardom. Released in 2011, the album is a raw and emotional exploration of heartbreak and loss, building upon the foundation laid by her debut, 19. With a mature and powerful vocal performance, Adele delves deep into the complexities of a failed relationship, capturing the universal experience of love and heartbreak with stunning honesty. Tracks like "Rolling in the Deep," "Someone Like You," and "Rumour Has It" became anthems of heartbreak, resonating with millions of listeners. 21 is characterized by its soulful melodies, lush arrangements, and Adele\'s extraordinary vocal range. The album\'s emotional depth and relatable lyrics have solidified Adele\'s status as one of the most influential and beloved artists of her generation.',
    )

    the_fame_monster = Album(
        name="The Fame Monster",
        user_id=13,
        year=2009,
        genre="pop",
        price=15.23,
        description="According to Gaga, the album deals with the darker side of fame, with its theme lyrically expressed through a monster metaphor. The album's two covers were shot by Hedi Slimane. One of the covers has a Gothic theme and was declined for release by her record company, but Gaga persuaded them.",
    )

    a_star_is_born = Album(
        name="A Star Is Born",
        user_id=13,
        year=2018,
        genre="pop",
        price=11.26,
        description='A Star Is Born is the soundtrack to the 2018 film of the same name, starring Lady Gaga and Bradley Cooper. The album showcases the raw talent and chemistry between the two artists, delivering a powerful and emotionally charged collection of songs. The album blends elements of pop, rock, and country, creating a unique and authentic sound that reflects the film\'s story of love, loss, and redemption. With tracks like "Shallow," "I\'ll Never Love Again," and "Always Remember Us This Way," the album became a massive commercial and critical success, earning numerous awards and accolades.',
    )

    elements_of_life = Album(
        name="Elements of Life",
        user_id=14,
        year=2007,
        genre="electronic",
        price=15.23,
        description='Tiesto\'s Elements of Life is a seminal electronic music album that marked a pivotal point in the artist\'s career. Released in 2007, it showcased a mature and refined sound, blending Tiesto\'s signature euphoric melodies with a more pop-oriented approach. The album features a strong emphasis on vocal collaborations, resulting in anthemic tracks like "Everything" and "Ten Seconds Before Sunrise." While maintaining its electronic core, "Elements of Life" expanded Tiesto\'s audience and solidified his status as a global superstar, demonstrating his ability to create music that resonated with both dance music enthusiasts and mainstream listeners alike.',
    )

    kaleidoscope = Album(
        name="Kaleidoscope",
        user_id=14,
        year=2009,
        genre="electronic",
        price=15.23,
        description="Kaleidoscope is the fourth studio album by Dutch DJ and record producer Tiësto, released on 6 October 2009 by Musical Freedom, Tiësto's new label in association with PIAS Recordings.[5] The album contains collaborations with Nelly Furtado, Emily Haines of Metric, Tegan and Sara, Jónsi of Sigur Rós, Kele Okereke of Bloc Party, and Calvin Harris among others.",
    )

    californication = Album(
        name="Californication",
        user_id=15,
        year=1999,
        genre="alternative",
        price=12.99,
        description='Although Californication still contains some funk rock songs (such as "Around the World", "Get on Top", "I Like Dirt", "Purple Stain" and "Right on Time"), it leaned towards more melodic riffs (for example, "Scar Tissue" and "Otherside") and focused on songs with implemented structure rather than jams.',
    )

    by_the_way = Album(
        name="By the Way",
        user_id=15,
        year=2002,
        genre="alternative",
        price=16.75,
        description='Red Hot Chili Peppers\' By the Way represents a sonic evolution for the band. While still retaining their signature funk-rock energy, the album showcases a more melodic and introspective side. With a greater emphasis on songwriting and harmonies, By the Way offers a fresh perspective on the band\'s sound. The album is characterized by its catchy hooks, intricate guitar work, and Anthony Kiedis\' more refined vocal delivery. Tracks like "The Zephyr Song," "Can\'t Stop," and "By the Way" became instant classics, demonstrating the band\'s ability to create both radio-friendly hits and deeper, more complex songs. By the Way marked a commercial peak for the Red Hot Chili Peppers, solidifying their status as one of the biggest rock bands in the world.',
    )

    revealed_vol_1 = Album(
        name="Revealed Vol. 1",
        user_id=16,
        year=2010,
        genre="electronic",
        price=18.32,
        description="Hardwell's Revealed Vol. 1 is a landmark electronic music compilation that marked the launch of the renowned Revealed Recordings label. Released in 2010, this album showcased the burgeoning progressive house sound that would define the era. Featuring tracks from Hardwell himself alongside a stellar lineup of rising and established artists, the compilation captured the energy and excitement of the electronic music scene at the time. It served as a platform for introducing new talent and solidifying Hardwell's position as a leading figure in the industry. With its infectious melodies, driving beats, and euphoric breakdowns, Revealed Vol. 1 became an instant classic, leaving an enduring impact on electronic music culture.",
    )

    united_we_are = Album(
        name="United We Are",
        user_id=16,
        year=2015,
        genre="electronic",
        price=5.15,
        description='The album is a sonic journey characterized by powerful synths, driving beats, and euphoric melodies. Tracks like "Follow Me" featuring Jason Derulo and "United We Are" exemplify the album\'s anthemic and uplifting spirit. Hardwell masterfully blends elements of progressive house, electro house, and trance, creating a cohesive and energetic listening experience. Beyond the infectious energy, United We Are also showcases Hardwell\'s ability to craft melodic and emotional moments. Tracks like "Let Me Be Your Home" and "Echo" demonstrate a softer side to his production, adding depth and diversity to the album. Overall, United We Are is a testament to Hardwell\'s talent as a producer and his ability to create music that resonates with millions of fans worldwide. It remains a quintessential example of the big room house genre and continues to be a beloved album in the EDM community.',
    )

    # Blake
    red_river_blue = Album(
        name="Red River Blue",
        user_id=18,
        year=2011,
        genre="country",
        price=9.19,
        description="Blake Shelton’s Red River Blue is his sixth studio album, released on July 12, 2011. The album features a mix of traditional and contemporary country sounds, reflecting Shelton's signature style. It includes hit singles like \"Honey Bee,\" which became one of his most successful songs, and \"God Gave Me You,\" a heartfelt ballad dedicated to his wife. The album's title, Red River Blue, references the Red River that runs through Oklahoma and Texas, tying into Shelton's roots and personal connections. Overall, the album showcases Shelton's ability to blend classic country elements with modern sensibilities, making it a notable entry in his discography.",
    )

    pure_bs = Album(
        name="Pure BS",
        user_id=18,
        year=2007,
        genre="country",
        price=8.99,
        description='Blake Shelton’s *Pure BS* is his fourth studio album, released on October 23, 2007. The album showcases Shelton’s traditional country roots while incorporating a modern edge. It includes popular tracks like "She Wouldn’t Be Gone" and "Don’t Make Me," which highlight Shelton’s ability to convey emotion and connect with listeners. *Pure BS* also features a blend of upbeat tunes and heartfelt ballads, demonstrating Shelton’s versatility as an artist. The album continues to be a significant part of Shelton’s discography, reflecting his growth and solidifying his presence in the country music scene.',
    )

    body_language = Album(
        name="Body Language",
        user_id=18,
        year=2021,
        genre="country",
        price=11.99,
        description='Blake Shelton’s *Body Language* is his twelfth studio album, released on May 21, 2021. The album features a blend of contemporary country sounds with influences from pop and rock. It includes hit singles like "Minimum Wage" and "Happy Anywhere," showcasing Shelton’s ability to mix upbeat tracks with heartfelt ballads. *Body Language* explores themes of love, resilience, and celebration, reflecting Shelton’s growth as an artist and his continued relevance in the country music genre. The album presents a polished, modern take on Shelton’s traditional country style.',
    )

    based_on_a_true_story = Album(
        name="Based on a True Story",
        user_id=18,
        year=2013,
        genre="country",
        price=9.49,
        description='Blake Shelton’s *Based on a True Story* is his eighth studio album, released on March 26, 2013. This album features a mix of traditional and contemporary country music, highlighting Shelton’s signature style. It includes hit singles like "Sure Be Cool If You Did" and "Mine Would Be You," both of which showcase Shelton’s ability to blend catchy melodies with relatable lyrics. *Based on a True Story* is known for its engaging and heartfelt content, reflecting Shelton’s personal experiences and solidifying his status as a leading figure in country music.',
    )

    startin_fires = Album(
        name="Startin' Fires",
        user_id=18,
        year=2008,
        genre="country",
        price=8.99,
        description='Blake Shelton’s *Starting Fires* is his fifth studio album, released on November 18, 2008. This album showcases Shelton’s versatility with a blend of traditional and modern country sounds. It features popular tracks like "She Wouldn’t Be Gone" and "Starting Fires," which highlight Shelton’s ability to deliver both emotionally resonant ballads and upbeat, energetic tunes. *Starting Fires* continues to cement Shelton’s reputation as a dynamic and influential artist in the country music genre.',
    )

    # Kenny G
    rhythm_and_romance = Album(
        name="Rhythm & Romance",
        user_id=17,
        year=2008,
        genre="jazz",
        price=12.99,
        description="Rhythm & Romance is the fifteenth studio album by Kenny G. The first of two bossa nova albums by the artist, the album peaked at number 15 on the R&B/Hip-Hop Albums chart, and number 14 on the Billboard 200. There was a tour supporting the album, called An Evening of Rhythm & Romance.",
    )

    heart_and_soul = Album(
        name="Heart and Soul",
        user_id=17,
        year=2010,
        genre="jazz",
        price=12.99,
        description="Kenny G’s Heart and Soul, released on June 29, 2010, is an album that showcases his signature smooth jazz style with a focus on romance and emotional depth. The album features a blend of original compositions and jazz standards, with Kenny G’s saxophone delivering emotive and soothing melodies. Heart and Soul highlights Kenny G’s ability to create music that resonates deeply with listeners and solidifies his status in contemporary jazz.",
    )

    paradise = Album(
        name="Paradise",
        user_id=17,
        year=2002,
        genre="jazz",
        price=13.49,
        description="Kenny G’s Paradise, released on September 10, 2002, is an album that exemplifies his smooth jazz style with a relaxed and uplifting tone. The album includes a mix of original compositions and covers, featuring Kenny G’s expressive saxophone performance. Notable tracks include the lively \"Paraside\" and the serene \"TSeaside Jam.\" Paradise reflects Kenny G’s ability to craft a calming and enjoyable listening experience, continuing his tradition of blending romantic melodies with contemporary jazz.",
    )

    db.session.add_all(
        [
            in_tongues,
            ballads_1,
            nectar,
            smithereens,
            this_is_what_blank_feels_like,
            nirvana,
            in_the_lonely_hour,
            the_thrill_of_it_all,
            help_ever_hurt_never,
            love_all_serve_all,
            rapunzel,
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
            nineteen,
            twenty_one,
            the_fame_monster,
            a_star_is_born,
            kaleidoscope,
            elements_of_life,
            californication,
            by_the_way,
            revealed_vol_1,
            united_we_are,
        ]
    )


    db.session.add_all(
        [red_river_blue, pure_bs, body_language, based_on_a_true_story, startin_fires]
    )
    db.session.add_all(
        [rhythm_and_romance, heart_and_soul, paradise]
    )

    db.session.commit()


def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM albums"))

    db.session.commit()
