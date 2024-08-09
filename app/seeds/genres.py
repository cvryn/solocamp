from app.models import db, environment, SCHEMA, Genre
from sqlalchemy.sql import text


def seed_genres():
    # 1
    pop = Genre(name="Pop")
    # 2
    rock = Genre(name="Rock")
    # 3
    rb = Genre(name="R&B")
    # 4
    electronic = Genre(name="Electronic")
    # 5
    alternative = Genre(name="Alternative")
    # 6
    rap = Genre(name="Rap")
    # 7
    experimental = Genre(name="Experimental")
    # 8
    jazz = Genre(name="Jazz")
    # 9
    country = Genre(name="Country")

    db.session.add_all(
        [pop, rock, rb, electronic, alternative, rap, experimental, jazz, country]
    )

    db.session.commit()


def undo_genres():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.genres RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM genres"))

    db.session.commit()
