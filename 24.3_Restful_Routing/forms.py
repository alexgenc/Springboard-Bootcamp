from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import InputRequired, Optional, NumberRange, URL

class AddCupcakeForm(FlaskForm):
  """Form for adding cupcakes."""

  flavor = StringField("Flavor", validators=[InputRequired()])
  size = StringField("Size", validators=[InputRequired()])
  rating = IntegerField("Rating", validators=[InputRequired(), NumberRange(min=1, max=10, message="Must be between 1 and 10")])
  image = StringField("Image URL", validators=[Optional(), URL()])

