from flask import Flask, render_template, jsonify, request
import requests
import random

app = Flask(__name__)

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num", methods=["POST"])
def get_lucky_num():
    """Return lucky nubmer and year trivia"""
    try:
        # Get all required arguments from request.json
        # If there is a missing argument, except block kicks.
        name = request.json['name']
        email = request.json['email']
        year = request.json['year']
        color = request.json['color']

        # Check if color is red, green, orange, or blue.
        if color == "red" or color == "green" or color == "orange" or color == "blue":
            
            lucky_num = random.randint(1, 100)
            num_fact = requests.get(f"http://numbersapi.com/{lucky_num}").text
            year_fact = requests.get(f"http://numbersapi.com/{year}/year").text

            response = (
                {
                    "num": {
                        "fact": str(num_fact),
                        "num": str(lucky_num),
                    },
                    "year": {
                        "fact": str(year_fact),
                        "year": str(year)
                    }
                })

            return jsonify(response)

        # This else block should run if color is not red, green, orange, or blue but it doesn't run.
        else:

            errors = {}

            errors['color'] = "Invalid value, must be one of: red, green, orange, blue."

            res = (
                {
                    "errors": errors
                }
            )

            return (jsonify(res), 400)

    # This except block runs if there is a missing required argument.
    except:

        errors = {}
    
        content = request.json
        
        required = ['name', 'email', 'year', 'color']

        for item in required:
            if item not in content:
                errors[item] = "This field is required!"
        
        res = (
            {
                "errors": errors
            }
        )

        return (jsonify(res), 400)
    
        
        
