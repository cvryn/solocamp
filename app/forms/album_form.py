from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField,SelectField
from wtforms.validators import DataRequired, Length, NumberRange

class AlbumForm(FlaskForm):
    name = StringField(
        "name",
        validators=[
            # DataRequired(),
            Length(min=2, max=100, message="Name must be between 2 and 100 characters."),
        ]
    )
    year = IntegerField(
        "year",
        validators=[
            NumberRange(min=1900, max=2100, message="Year must be between 1900 and 2100."),
            # DataRequired()
        ]
    )
    genre = SelectField("genre", 
                        choices=[("rock"), 
                                 ("pop"), 
                                 ("jazz"),
                                 ("classical"),
                                 ("r&b"),
                                 ("country"),
                                 ('exprimental'),
                                 ('rap'),
                                 ('electrinic')],
                        validators=[DataRequired()])
    price = DecimalField(
        "price",
        validators=[
            NumberRange(min=0.01, message="Price must be a positive number."),
            # DataRequired()
        ]
    )
    description = StringField(
        "description",
        validators=[
            # DataRequired(),
            Length(min=3, max=500, message="Description must be between 10 and 500 characters."),
        ]
    )
