from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, URL, Regexp


class AlbumArtForm(FlaskForm):
    album_art = StringField(
        "album art", validators=[DataRequired(), URL(message="Must be a valid URL")]
    )
    album_banner = StringField(
        "album banner", validators=[DataRequired(), URL(message="Must be a valid URL")]
    )
    background_color = StringField(
        "background color",
        validators=[
            DataRequired(),
            Regexp(
                r"^rgb\((25[0-5]|2[0-4]\d|1\d{2}|\d{1,2}),\s*(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2}),\s*(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})\)$",
                message="Must be in the format 'rgb(0-255, 0-255, 0-255)!!!'"
            )
        ],
    )
