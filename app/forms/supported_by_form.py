from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class SupportedByForm(FlaskForm):
    description = StringField("description", validators=[DataRequired()])
    song_id = IntegerField("song id")
