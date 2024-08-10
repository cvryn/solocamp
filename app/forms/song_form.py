from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class SongForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    track_number = StringField("track number", validators=[DataRequired()])
    song_url = StringField("song_url", validators=[DataRequired()])
