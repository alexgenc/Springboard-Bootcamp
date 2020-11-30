"""Models for Flask-Feedback App."""

from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
db = SQLAlchemy()

class User(db.Model):
    """User model."""

    __tablename__ = "users"

    #set table columns
    username = db.Column(db.String(20), primary_key=True, unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)

    feedbacks = db.relationship("Feedback", backref="user", cascade="all,delete")

    @classmethod
    def register(cls, username, password, email, first_name, last_name):
        """Register user with hashed password and return user."""
        hashed_password = bcrypt.generate_password_hash(password)
        # turn bytestring into normal (unicode utf8) string
        hashed_password_utf8 = hashed_password.decode("utf8")

        # return instance of user
        return cls(username=username, password=hashed_password_utf8, email=email, first_name=first_name, last_name=last_name)

    @classmethod
    def login(cls, username, password):
        """Authenticate and login user."""
        user = User.query.filter_by(username=username).first()

        # validate if user exists and if password is correct
        if user and bcrypt.check_password_hash(user.password, password):
            #return user instance
            return user
        else: 
            return False
    
    def __repr__(self):
        """Show info about user."""
        u = self
        return f"<{u.username}: {u.first_name} {u.last_name} - {u.email}>"

class Feedback(db.Model):
    """Feedback model."""

    __tablename__ = "feedbacks"

    id = db.Column(db.Integer, primary_key=True, auto_increment=True)

    title = db.Column(db.String(100), nullable=False)

    content = db.Column(db.Text, nullable=False)

    username = db.Column(db.String(20), db.ForeignKey('users.username'), nullable=False)

    def __repr__(self):
        """Show info about user."""
        f = self
        return f"<{f.title}: {f.content} by {f.username}>"

def connect_db(app):
    """Connect to database."""
    db.app = app
    db.init_app(app)