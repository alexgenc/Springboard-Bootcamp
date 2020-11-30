"""Models for Cupcake app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

DEFAULT_IMG_URL = 'https://thestayathomechef.com/wp-content/uploads/2017/12/Most-Amazing-Chocolate-Cupcakes-1-small.jpg'

class Cupcake(db.Model):
  """Cupcake model."""

  __tablename__ = "cupcakes"

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  flavor = db.Column(db.Text, nullable=False)
  size = db.Column(db.Text, nullable=False)
  rating = db.Column(db.Float, nullable=False)
  image = db.Column(db.Text, default=DEFAULT_IMG_URL)



def connect_db(app):
    """Connect to database"""
    db.app = app
    db.init_app(app)