"""Seed file to make sample data for pets db."""

from models import User, db
from app import app
from flask_sqlalchemy import SQLAlchemy

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
User.query.delete()

# Add pets
messi = User(first_name='Lionel', last_name='Messi', image_url="https://tmssl.akamaized.net/images/foto/normal/lionel-messi-ballon-dor-2019-1592819026-41968.jpg")
thor = User(first_name='Thor', last_name='Odinson', image_url="https://images.firstpost.com/wp-content/uploads/2019/04/thor380.jpg")
jack_sparrow = User(first_name='Jack', last_name='Sparrow', image_url="https://i2.cnnturk.com/i/cnnturk/75/630x0/5bd55aa861361f1e700352e2.jpg")

# Add new objects to session, so they'll persist
db.session.add(messi)
db.session.add(thor)
db.session.add(jack_sparrow)

# Commit--otherwise, this never gets saved!
db.session.commit()
