from flask_wtf import FlaskForm
from wtforms import StringField, EmailField
from wtforms.validators import DataRequired, ValidationError, Length, Email, URL
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
        "username", validators=[DataRequired(message="Please enter a username."), username_exists, Length(min=2, max=50, message="Username must be between 2 and 50 characters long.")]
    )
    email = EmailField(
        "email",
        validators=[DataRequired(message="Please enter your email address."), Email(), user_exists, Length(min=5, max=50, message="Length must be between 5 and 50.")],
    )
    first_name = StringField(
        "first name", validators=[DataRequired(message="First name is required."), Length(min=2, max=50, message="First name must be between 2 and 50 characters long.")]
    )
    last_name = StringField(
        "last name", validators=[DataRequired(message="Last name is required."), Length(min=1, max=50,message="Last name must be between 1 and 50 characters long." )]
    )
    profile_image = StringField("profile image", validators=[URL(message='Must be a valid URL')])
    password = StringField("password", validators=[DataRequired(message="Please enter a password."),Length(min=4, max=50, message="Password must be between 4 and 50 characters long.") ])
