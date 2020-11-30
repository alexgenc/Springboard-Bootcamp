from stories import story
from flask import Flask, render_template, request
from flask_debugtoolbar import DebugToolbarExtension


app = Flask(__name__)

app.config["SECRET_KEY"] = "ABCDEF"

debug = DebugToolbarExtension(app)

@app.route("/")
def home_page():
    return render_template("homepage.html", story=story)


@app.route("/story", methods=["POST"])
def show_story():
    return render_template("storypage.html", story=story)