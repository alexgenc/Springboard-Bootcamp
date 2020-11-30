from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

#Initial Code - Before Further Study
@app.route('/add')
def my_add():
    a = int(request.args["a"])
    b = int(request.args["b"])
    res = add(a,b)
    return str(res)


@app.route('/sub')
def my_sub():
    a = int(request.args["a"])
    b = int(request.args["b"])
    res = sub(a,b)
    return str(res)

@app.route('/mult')
def my_mult():
    a = int(request.args["a"])
    b = int(request.args["b"])
    res = mult(a,b)
    return str(res)

@app.route('/div')
def my_div():
    a = int(request.args["a"])
    b = int(request.args["b"])
    res = div(a,b)
    return str(res)


# Further Study

operations = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div
}


@app.route('/math/<operation>')
def my_operation(operation):
    operation = operations[operation]
    a = int(request.args["a"])
    b = int(request.args["b"])
    res = operation(a,b)
    return str(res)