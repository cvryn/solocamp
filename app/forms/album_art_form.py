from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class AlbumArtForm(FlaskForm):
    album_art = StringField("album art", validators=[DataRequired()])
    album_banner = StringField("album banner", validators=[DataRequired()])
    background_color = StringField("background color", validators=[DataRequired()])
