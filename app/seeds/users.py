from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username="Demo",
        profile_image="url",
        first_name="Demo",
        last_name="User",
        email="demo@solocamp.io",
        password="password",
    )
    joji = User(
        username="Joji",
        profile_image="url",
        first_name="George",
        last_name="Miller",
        email="joji@solocamp.io",
        password="password",
    )
    jvke = User(
        username="JVKE",
        profile_image="url",
        first_name="Jacob",
        last_name="Lawson",
        email="jvke@solocamp.io",
        password="password",
    )
    samsmith = User(
        username="SamSmith",
        profile_image="url",
        first_name="Samuel",
        last_name="Smith",
        email="samsmith@solocamp.io",
        password="password",
    )
    fujii = User(
        username="Fujii",
        profile_image="url",
        first_name="Fujii",
        last_name="Kaze",
        email="fujii@solocamp.io",
        password="password",
    )
    dhruv = User(
        username="Dhrvie",
        profile_image="url",
        first_name="Dhruv",
        last_name="Sharma",
        email="djruv@solocamp.io",
        password="password",
    )
    jay = User(
        username="Jay",
        profile_image="url",
        first_name="Jay",
        last_name="Chou",
        email="jay@solocamp.io",
        password="password",
    )
    gai = User(
        username="Gai",
        profile_image="url",
        first_name="Yan",
        last_name="Chou",
        email="gai@solocamp.io",
        password="password",
    )
    ice = User(
        username="Ice",
        profile_image="url",
        first_name="Changqing",
        last_name="Yang",
        email="ice@solocamp.io",
        password="password",
    )
    vinida = User(
        username="Vinida",
        profile_image="url",
        first_name="Ying",
        last_name="Weng",
        email="vinida@solocamp.io",
        password="password",
    )
    jolin = User(
        username="Jolin",
        profile_image="url",
        first_name="Yilin",
        last_name="Tsai",
        email="jolin@solocamp.io",
        password="password",
    )
    adele = User(
        username="Adele",
        profile_image="url",
        first_name="Adele",
        last_name="Adkins",
        email="adele@solocamp.io",
        password="password",
    )
    lady_gaga = User(
        username="Lady Gaga",
        profile_image="url",
        first_name="Stefani",
        last_name="Germanotta",
        email="ladygaga@solocamp.io",
        password="password",
    )
    tiesto = User(
        username="Tiesto",
        profile_image="url",
        first_name="Michiel",
        last_name="Verwest",
        email="tiesto@solocamp.io",
        password="password",
    )
    cole_dammett = User(
        username="Cole Dammett",
        profile_image="url",
        first_name="Anthony",
        last_name="Kiedis",
        email="cole_dammett@solocamp.io",
        password="password",
    )
    hardwell = User(
        username="Hardwell",
        profile_image="url",
        first_name="Robbert",
        last_name="Corput",
        email="hardwell.solocamp.io",
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
    db.session.add_all([demo, adele, lady_gaga, tiesto, cole_dammett, hardwell])

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
