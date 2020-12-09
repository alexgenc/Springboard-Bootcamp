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
        name = request.json['name']
        email = request.json['email']
        year = request.json['year']
        color = request.json['color']

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

    except:

        errors = {}
    
        content = request.json
        required = ['name', 'email', 'year', 'color']

        for item in required:
            if item not in content:
                errors[item] = "This field is required"

        if content['color'] in content:      
            if content['color'] != "red" or "green" or "orange" or "blue":
                errors['color'] = "Invalid value, must be one of: red, green, orange, blue."
        
        res = (
            {
                "errors": errors
            }
        )

        return (jsonify(res), 400)
    
        
        
