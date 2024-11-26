from app.models import db, environment, SCHEMA, User
from sqlalchemy.sql import text


def seed_users():
    # 1
    demo = User(
        username="Demo",
        profile_image="https://solocamp-ac.s3.us-east-2.amazonaws.com/demo_user/demo_user.jpg",
        first_name="Demo",
        last_name="User",
        email="demo@solocamp.io",
        password="password",
    )

    # 2
    joji = User(
        username="Joji",
        profile_image="https://solocamp-files.s3.amazonaws.com/joji/joji_profile_pic.jpg",
        first_name="George",
        last_name="Miller",
        email="joji@solocamp.io",
        password="password",
    )

    # 3
    jvke = User(
        username="JVKE",
        profile_image="https://solocamp-files.s3.amazonaws.com/jvke/jvke_profile_pic.jpg",
        first_name="Jacob",
        last_name="Lawson",
        email="jvke@solocamp.io",
        password="password",
    )

    # 4
    samsmith = User(
        username="Sam Smith",
        profile_image="https://solocamp-files.s3.amazonaws.com/sam-smith/samsmith_profile_pic.png",
        first_name="Samuel",
        last_name="Smith",
        email="samsmith@solocamp.io",
        password="password",
    )

    # 5
    fujii = User(
        username="Fujii",
        profile_image="https://solocamp-files.s3.amazonaws.com/fujii/fujii_profile-_picture.jpg",
        first_name="Fujii",
        last_name="Kaze",
        email="fujii@solocamp.io",
        password="password",
    )

    # 6
    dhruv = User(
        username="Dhruv",
        profile_image="https://solocamp-files.s3.amazonaws.com/dhruv/rapunzel/dhruv_profile_pic.jpg",
        first_name="Dhruv",
        last_name="Sharma",
        email="djruv@solocamp.io",
        password="password",
    )
    # 7
    jay = User(
        username="Jay",
        profile_image="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723701650/solocamp/afe91a0fbd46406ea094f2b3be6dd931_irgtwy.jpg",
        first_name="Jay",
        last_name="Chou",
        email="jay@solocamp.io",
        password="password",
    )

    # 8
    gai = User(
        username="Gai",
        profile_image="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723701649/solocamp/images_fkmmy3.jpg",
        first_name="Yan",
        last_name="Chou",
        email="gai@solocamp.io",
        password="password",
    )

    # 9
    ice = User(
        username="Ice",
        profile_image="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723701648/solocamp/ab6761610000e5eb13069429c7aa47dd65889b88_ctqbnl.jpg",
        first_name="Changqing",
        last_name="Yang",
        email="ice@solocamp.io",
        password="password",
    )

    # 10
    vinida = User(
        username="Vinida",
        profile_image="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723701649/solocamp/2024042607585798_exnf9b.png",
        first_name="Ying",
        last_name="Weng",
        email="vinida@solocamp.io",
        password="password",
    )

    # 11
    jolin = User(
        username="Jolin",
        profile_image="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723701648/solocamp/3F_3F_3F_Jolin_Tsai_2023_j79jtd.webp",
        first_name="Yilin",
        last_name="Tsai",
        email="jolin@solocamp.io",
        password="password",
    )
    # 12
    adele = User(
        username="Adele",
        profile_image="https://solocamp-ac.s3.us-east-2.amazonaws.com/Adele/adele.jpg",
        first_name="Adele",
        last_name="Adkins",
        email="adele@solocamp.io",
        password="password",
    )
    # 13
    lady_gaga = User(
        username="Lady Gaga",
        profile_image="https://solocamp-ac.s3.us-east-2.amazonaws.com/Lady+Gaga/lady_gaga.jpg",
        first_name="Stefani",
        last_name="Germanotta",
        email="lady_gaga@solocamp.io",
        password="password",
    )

    # 14
    tiesto = User(
        username="Tiesto",
        profile_image="https://solocamp-ac.s3.us-east-2.amazonaws.com/Tiesto/tiesto.jpg",
        first_name="Michiel",
        last_name="Verwest",
        email="tiesto@solocamp.io",
        password="password",
    )

    # 15
    cole_dammett = User(
        username="Cole Dammett",
        profile_image="https://solocamp-ac.s3.us-east-2.amazonaws.com/Cole+Dammett/cole+dammett.jpg",
        first_name="Anthony",
        last_name="Kiedis",
        email="cole_dammett@solocamp.io",
        password="password",
    )

    # 16
    hardwell = User(
        username="Hardwell",
        profile_image="https://solocamp-ac.s3.us-east-2.amazonaws.com/Hardwell/hardwell.jpg",
        first_name="Robbert",
        last_name="Corput",
        email="hardwell@solocamp.io",
        password="password",
    )

    # 17
    kenny_g = User(
        username="Kenny G",
        profile_image="https://solocamp-ac.s3.us-east-2.amazonaws.com/Kenny+G/kenny_g.jpg",
        first_name="Kenneth",
        last_name="Gorelick",
        email="kenny_g@solocamp.io",
        password="password",
    )

    #18
    blake = User(
        username="Blake",
        profile_image="https://solocamp-files.s3.amazonaws.com/blake/Blake-Shelton-profile-pic.jpg",
        first_name="Blake",
        last_name="Shelton",
        email="blake@solocamp.io",
        password="password",
    )

    db.session.add(demo)

    db.session.add_all(
        [
            joji,
            jvke,
            samsmith,
            fujii,
            dhruv,
        ]
    )
    db.session.add_all(
        [
            jay,
            gai,
            ice,
            vinida,
            jolin,
        ]
    )
    db.session.add_all([adele, lady_gaga, tiesto, cole_dammett, hardwell, kenny_g])

    db.session.add_all([blake])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
