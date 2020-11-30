from boggle import Boggle
from flask import Flask, render_template, request, redirect, flash, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension

boggle_game = Boggle()

app = Flask(__name__)

# set a 'SECRET_KEY' to enable the Flask session cookies
app.config["SECRET_KEY"] = "secret"

# stop debug toolbar from intercepting redirects
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

# the debug toolbar is only enabled in debug mode:
app.debug = True

# initialize the debug toolbar
debug = DebugToolbarExtension(app)

my_boggle = Boggle()

@app.route("/")
def display_board():
    
    board = my_boggle.make_board()
    session['board'] = board
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    return render_template("homepage.html", board=board, highscore=highscore, nplays=nplays)


@app.route("/check-guess")
def check_guess():
    user_guess = request.args["guess"]
    board = session["board"]
    response = boggle_game.check_valid_word(board, user_guess)
    return jsonify({'result': response})


@app.route("/post-score", methods=["POST"])
def post_score():
    """Receive score, update nplays, update high score if appropriate."""

    score = request.json["score"]
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    session['nplays'] = nplays + 1
    session['highscore'] = max(score, highscore)

    return jsonify(brokeRecord=score > highscore)
