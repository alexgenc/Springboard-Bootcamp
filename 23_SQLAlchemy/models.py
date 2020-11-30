"""Models for Blogly."""

from datetime import datetime
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class User(db.Model):
  """User model"""

  __tablename__ = "users"

  #set table columns
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  first_name = db.Column(db.Text, nullable=False)
  last_name = db.Column(db.Text, nullable=False)
  image_url = db.Column(db.Text, nullable=False, default="https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg")

  posts = db.relationship("Post", backref="user")

  def __repr__(self):
    """Show info about user"""
    u = self
    return f"<User {u.id} - {u.first_name} {u.last_name}>"

class Post(db.Model):
  """Post model"""

  __tablename__ = "posts"

  # set table columns
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  title = db.Column(db.Text, nullable=False)
  content = db.Column(db.Text, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default = datetime.utcnow)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  def __repr__(self):
    """Show info about post"""
    p = self
    return f"<User {p.id} - {p.title} {p.created_at} {p.user_id}>"

class Tag(db.Model):
  """Tag model"""

  __tablename__ = "tags"

  # set table columns
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.Text, unique=True, nullable=False)

  posts = db.relationship('Post', secondary="post_tag", backref="tags")

  def __repr__(self):
    """Show info about post"""
    t = self
    return f"<Tag {t.id} - {t.name}>"


class PostTag(db.Model):
  """Post-Tag model"""

  ___tablename__ = "post_tag"

  # set table columns
  post_id = db.Column(db.Integer, db.ForeignKey("posts.id"), primary_key=True)
  tag_id = db.Column(db.Integer, db.ForeignKey("tags.id"), primary_key=True)


def connect_db(app):
    """Connect to database"""
    db.app = app
    db.init_app(app)