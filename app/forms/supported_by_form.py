from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class SupportedByForm(FlaskForm):
    description = StringField("description", validators=[DataRequired(), Length(min=3, max=255, message="Description must be at least 3 characters long.")])
    song_id = IntegerField("song id")
