from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
from wtforms.validators import DataRequired

class SupportedByForm(FlaskForm):
    description = StringField('description', validators=[DataRequired()])
