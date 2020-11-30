from flask import Flask, render_template, request, redirect, flash, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from forex import check_currency, convert_currency, check_amount

app = Flask(__name__)

# set a 'SECRET_KEY' to enable the Flask session cookies
app.config["SECRET_KEY"] = "secret"

# stop debug toolbar from intercepting redirects
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

# the debug toolbar is only enabled in debug mode:
app.debug = True

# initialize the debug toolbar
debug = DebugToolbarExtension(app)


@app.route("/", methods=["GET", "POST"])
def homepage():
  """ home page render template"""

  # if post request --> for form submission
  if request.method == "POST":
    # get user input from form values
    converting_from = request.form['converting-from']
    converting_to = request.form['converting-to']
    amount = request.form['amount']

    # check both currencies are valid 
    if not check_currency(converting_from) or not check_currency(converting_to):
      error_message = "Invalid Currency"
      return render_template("homepage.html", error_message=error_message)
    # check amount is valid, i.e., it doesn't contain any letters
    elif not check_amount(amount):
      error_message = "Invalid Amount"
      return render_template("homepage.html", error_message=error_message)
    # if both currencies and amount are valid
    else:
      # get currency symbols
      currency_symbol_from = check_currency(converting_from)
      currency_symbol_to = check_currency(converting_to)
      # turn form input amount from string to a float
      amount = float(amount)
      # convert currency
      result = convert_currency(converting_from, converting_to, amount)
      # round result to 2 decimal points
      formatted_result = float("{:.2f}".format(result))
      # display for user
      return render_template("homepage.html", formatted_result=formatted_result, currency_symbol_to=currency_symbol_to, currency_symbol_from=currency_symbol_from, amount=amount)
  
  # if get request
  else: 
    return render_template("homepage.html")
    
