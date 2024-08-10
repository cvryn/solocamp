from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class AlbumForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    year = StringField("year", validators=[DataRequired()])
    genre = StringField("genre", validators=[DataRequired()])
    price = StringField("price", validators=[DataRequired()])
    description = StringField("description", validators=[DataRequired()])
