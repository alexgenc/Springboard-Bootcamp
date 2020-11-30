from flask import Flask, render_template, request, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

app = Flask(__name__)

app.config["SECRET_KEY"] = "secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

# list for storing user responses
RESPONSES_KEY = "responses"

@app.route("/")
def home_page():
    """list survey info and allow user to begin survey"""
    return render_template("homepage.html", survey=survey)


@app.route("/start", methods=["POST"])
def start():
    session[RESPONSES_KEY] = []
    return redirect("/questions/0")


@app.route("/questions/<int:number>")
def ask_questions(number):
    survey_questions = survey.questions
    question = survey_questions[number]

    responses = session.get(RESPONSES_KEY)

    if (len(responses) == len(survey_questions)):
        # They've answered all the questions! Thank them.
        flash(f"You've already completed the survey. Thank you!")
        return redirect("/thankyou")
        
    if (len(responses) != number):
        # Trying to access questions out of order.
        flash(f"Invalid question id: {number}.")
        return redirect(f"/questions/{len(responses)}")
    
    else:
        return render_template("questions.html", number=number, question=question)

@app.route("/answer", methods=["POST"])
def save_answer():
    """Save user's answer and redirect to next question"""

    
    answer = request.form["choice"]

    # add this response to the session
    responses = session[RESPONSES_KEY]
    responses.append(answer)
    session[RESPONSES_KEY] = responses

    if (len(responses) == len(survey.questions)):
        # They've answered all the questions! Thank them.
        return redirect("/thankyou")

    else:
        return redirect(f"/questions/{len(responses)}")

@app.route("/thankyou")
def thank_you():
    """Show thank you page after user completes the survey"""

    return render_template("thankyou.html")
    

