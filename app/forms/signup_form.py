from flask_wtf import FlaskForm
from wtforms import StringField, EmailField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("Email address is already in use.")


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError("Username is already in use.")


class SignUpForm(FlaskForm):
    username = StringField(
        "username", validators=[DataRequired(), username_exists, Length(min=2, max=20)]
    )
    email = EmailField(
        "email",
        validators=[DataRequired(), user_exists],
    )
    first_name = StringField(
        "first name", validators=[DataRequired(), Length(min=2, max=20)]
    )
    last_name = StringField(
        "last name", validators=[DataRequired(), Length(min=1, max=20)]
    )
    profile_image = StringField("profile image", validators=[DataRequired()])
    password = StringField("password", validators=[DataRequired()])
