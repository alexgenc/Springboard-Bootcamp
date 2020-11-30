from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField, BooleanField
from wtforms.validators import InputRequired, Optional, Length, NumberRange, URL


class AddPetForm(FlaskForm):
    """ Form for adding pets. """

    name = StringField("Pet Name", validators=[InputRequired()])

    species = SelectField("Species", choices=[("cat", "Cat"), ("dog", "Dog"), ("porcupine", "Porcupine")])

    photo_url = StringField("Photo URL", validators=[Optional(), URL()])

    age = IntegerField("Age", validators=[Optional(), NumberRange(min=0, max=30)])

    notes = StringField("Additional Information", validators=[Optional(), Length(min=10)])

class EditPetForm(FlaskForm):
    """ Form for editing pets. """

    photo_url = StringField("Photo URL", validators=[Optional(), URL()])

    age = IntegerField("Age", validators=[Optional(), NumberRange(min=0, max=30)])
    
    notes = TextAreaField("Additional Information", validators=[Optional(), Length(min=10)])

    available = BooleanField("Available?")