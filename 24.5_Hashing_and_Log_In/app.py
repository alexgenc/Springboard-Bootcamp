"""Feedback Flask app."""

from flask import Flask, redirect, render_template, session, flash
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Feedback
from forms import RegistrationForm, LoginForm, FeedbackForm
from werkzeug.exceptions import Unauthorized

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///feedback'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

app.config['SECRET_KEY'] = "SECRET!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()

@app.route("/")
def root():
    """Redirect to /register."""

    return redirect("/register")


@app.route("/register", methods=["GET", "POST"])
def register():
    """Show a registeration form and handle form submission."""

    if "username" in session:
        return redirect(f"/users/{session['username']}")

    form = RegistrationForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        email = form.email.data
        first_name = form.first_name.data
        last_name = form.last_name.data

        user = User.register(username, password, email, first_name, last_name)

        db.session.add(user)
        db.session.commit()

        # add username to session
        session['username'] = user.username

        flash(f"Welcome {username}!")
        return redirect(f"/users/{user.username}")
    else:
        return render_template("user/register.html", form=form)


@app.route("/login", methods=["GET", "POST"])
def login():
    """Show a login form and handle form submission."""
    if "username" in session:
        return redirect(f"/users/{session['username']}")
        
    form = LoginForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.login(username, password)

        if user:
            session["username"] = user.username
            flash(f"Welcome back {username}!")
            return redirect(f"/users/{user.username}")
        else:
            form.username.errors = ["Invalid username or password!"]
    
    return render_template("user/login.html", form=form)

@app.route("/logout")
def logout():
    """Log user out and redirect to /login."""

    
    session.pop("username")
    flash(f"Goodbye!")
    return redirect("/login")


@app.route("/users/<username>")
def user_info(username):
    """Show user info and user's feedbacks."""
    
    if "username" not in session or username != session['username']:
        raise Unauthorized()
    
    user = User.query.get(username)

    user_feedbacks = Feedback.query.filter_by(username=username)

    return render_template("user/show_user.html", user=user, user_feedbacks=user_feedbacks)


@app.route("/users/<username>/delete", methods=["POST"])
def delete_user(username):
    """Delete existing user."""
    if "username" not in session or username != session['username']:
        raise Unauthorized()

    user = User.query.get_or_404(username)
    db.session.delete(user)
    db.session.commit()
    session.pop("username")

    return redirect("/login")


@app.route("/users/<username>/feedback/add", methods=["GET", "POST"])
def give_feedback(username):
    """Give feedback."""
    if "username" not in session or username != session['username']:
        raise Unauthorized()

    form = FeedbackForm()

    # user = User.query.filter_by(username=username).first()

    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data

        new_feedback = Feedback(title=title, content=content, username=username)

        db.session.add(new_feedback)
        db.session.commit()

        return redirect(f"/users/{new_feedback.username}")

    else:
        return render_template("feedback/new_feedback.html", form=form)


@app.route("/feedback/<int:feedback_id>/update", methods=["GET", "POST"])
def update_feedback(feedback_id):
    """Show update feedback form and handle form submission."""
    feedback = Feedback.query.get_or_404(feedback_id)

    if "username" not in session or feedback.username != session['username']:
        raise Unauthorized()

    form = FeedbackForm(obj=feedback)
    
    if form.validate_on_submit():
        feedback.title = form.title.data
        feedback.content = form.content.data

        db.session.commit()

        return redirect(f"/users/{feedback.username}")

    else:
      return render_template("feedback/edit_feedback.html", form=form)


@app.route("/feedback/<int:feedback_id>/delete", methods=["POST"])
def delete_feedback(feedback_id):
    """Delete existing feedback."""
    
    feedback = Feedback.query.get_or_404(feedback_id)

    if "username" not in session or feedback.username != session['username']:
        raise Unauthorized()
    
    Feedback.query.filter_by(id=feedback_id).delete()
    db.session.commit()

    return redirect(f"/users/{feedback.username}")


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.errorhandler(401)
def page_not_found(e):
    return render_template("401.html"), 401