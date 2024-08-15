from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, URL, Regexp

class AlbumArtForm(FlaskForm):
    album_art = StringField(
        "album art", 
        validators=[DataRequired(), URL(message="Must be a valid URL")]
    )
    album_banner = StringField(
        "album banner", 
        validators=[DataRequired(), URL(message="Must be a valid URL")]
    )
    background_color = StringField(
        "background color", 
        validators=[
            DataRequired(), 
            Regexp(
                r"^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$",
                message="Must be in the format 'rgb(0,0,0)'"
            )
        ]
    )
