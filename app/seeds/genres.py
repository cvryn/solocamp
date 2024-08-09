from app.models import db, User, environment, SCHEMA, Genre
from sqlalchemy.sql import text


def seed_genres():
    #1
    pop = Genre(
        name="Pop"
    )
    #2
    rock = Genre(
        name="Rock"
    )
    #3
    rb = Genre(
        name="R&B"
    )
    #4
    electronic = Genre(
        name="Pop"
    )
    #5
    alternative = Genre(
        name="Alternative"
    )
    #6
    rap = Genre(
        name="Rap"
    )
    #7
    experimental = Genre(
        name="Experimental"
    )
    #8
    jazz = Genre(
        name="Jazz"
    )
    #9
    country = Genre(
        name="Country"
    )

    db.session.add_all(
        [
            pop,
            rock,
            rb,
            electronic,
            alternative,
            rap,
            experimental,
            jazz,
            country
        ]
    )


    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_genres():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.genres RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM genre"))

    db.session.commit()
