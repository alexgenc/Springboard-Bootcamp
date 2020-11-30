"""Models for Pet Adoption Agency"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Pet(db.Model):
  """ Pet model. """

  __tablename__ = "pets"

  #set table columns
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.Text, nullable=False)
  species = db.Column(db.Text, nullable=False)
  photo_url = db.Column(db.Text, default="https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg")
  age = db.Column(db.Integer)
  notes = db.Column(db.Text)
  available = db.Column(db.Boolean, nullable=False, default=True)

  def __repr__(self):
    """Show info about user"""
    p = self
    return f"<Pet {p.name} - {p.species}>"


def connect_db(app):
    """Connect to database"""
    db.app = app
    db.init_app(app)