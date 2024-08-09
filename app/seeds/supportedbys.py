from app.models import db, environment, SCHEMA, SupportedBy
from sqlalchemy.sql import text

'''
  user_albumname= SupportedBy(
        description="Loved the vibes!",
        track_number=1,
        album_id=11,
        user_id =2
    )
'''

def seed_supportedbys():

    joji_rapunzel = SupportedBy(
        description="Loved the vibes!",
        favorite_track=1,
        album_id=11,
        user_id =2
    )


    db.session.add_all([joji_rapunzel])
    db.session.commit()


def undo_supportedbys():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.supportedbys RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM supportedby"))

    db.session.commit()
