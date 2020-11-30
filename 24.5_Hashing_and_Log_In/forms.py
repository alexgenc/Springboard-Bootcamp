"""Forms for Flask-Feedback App.""" 

from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import InputRequired, Email, Length, ValidationError
from models import User

class RegistrationForm(FlaskForm):
    """Form for signing up as a user."""

    username = StringField("Username", validators=[InputRequired(), Length(max=20)])

    password = PasswordField("Password", validators=[InputRequired()])

    email = StringField("Email", validators=[InputRequired(), Length(max=50)])

    first_name = StringField("First Name", validators=[InputRequired(), Length(max=30)])

    last_name = StringField("Last Name", validators=[InputRequired(), Length(max=30)])

    def validate_username(self, username):
        """Validate username is unique."""
        user = User.query.filter_by(username=username.data).first()
        if user:
            raise ValidationError('That username is already taken. Please choose another username.')
    
    def validate_email(self, email):
        """Validate username is unique."""
        user = User.query.filter_by(email=email.data).first()
        if user:
            raise ValidationError('That email is already in use.')
    

class LoginForm(FlaskForm):
    """Form for logging in a user."""

    username = StringField("Username", validators=[InputRequired(), Length(max=20)])

    password = PasswordField("Password", validators=[InputRequired()])


class FeedbackForm(FlaskForm):
    """Form for submitting feedback."""

    title = StringField("Title", validators=[InputRequired(), Length(max=100)])

    content = StringField("Content", validators=[InputRequired()])


