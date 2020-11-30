"""Flask app for Cupcakes"""

from flask import Flask, redirect, render_template, jsonify, request
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Cupcake
from forms import AddCupcakeForm


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

app.config['SECRET_KEY'] = "SECRET!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()


def serialize_cupcake(cupcake):
  """Serialize a cupcake SQL Alchemy object to a dictionary"""

  return {
    "id": cupcake.id,
    "flavor": cupcake.flavor,
    "size": cupcake.size,
    "rating": cupcake.rating,
    "image": cupcake.image,
  }

@app.route("/")
def homepage():
  """Display all cupcakes"""

  form = AddCupcakeForm()

  return render_template("homepage.html", form=form)

@app.route("/api/cupcakes")
def get_all_cupcakes():
  """Get info on all cupcakes"""

  cupcakes = Cupcake.query.all()
  serialized_cupcakes = [serialize_cupcake(cupcake) for cupcake in cupcakes]

  return jsonify(cupcakes=serialized_cupcakes)

@app.route("/api/cupcakes/<int:cupcake_id>")
def get_cupcake(cupcake_id):
  """Get info on a specific cupcake"""

  cupcake = Cupcake.query.get_or_404(cupcake_id)
  serialized_cupcake = serialize_cupcake(cupcake)

  return jsonify(cupcake=serialized_cupcake)

@app.route("/api/cupcakes", methods=["POST"])
def add_cupcake():
  """Add a cupcake"""

  form = AddCupcakeForm()

  if form.validate_on_submit(): 
    flavor = form.flavor.data
    size = form.size.data
    rating = form.rating.data
    image = form.image.data
    
    new_cupcake = Cupcake(flavor=flavor, size=size, rating=rating, image=image or None)

    db.session.add(new_cupcake)
    db.session.commit()

    return redirect("/")

  else:
    flavor = request.json['flavor']
    size = request.json['size']
    rating = request.json['rating']
    image = request.json['image'] or None

    new_cupcake = Cupcake(flavor=flavor, size=size, rating=rating, image=image or None)

    db.session.add(new_cupcake)
    db.session.commit()

    serialized_cupcake = serialize_cupcake(new_cupcake)

    return (jsonify(cupcake=serialized_cupcake), 201)


@app.route("/api/cupcakes/<int:cupcake_id>", methods=["PATCH"])
def update_cupcake(cupcake_id):
  """Update info on a specific cupcake"""

  cupcake = Cupcake.query.get_or_404(cupcake_id)

  cupcake.flavor = request.json['flavor']
  cupcake.size = request.json['size']
  cupcake.rating = request.json['rating']
  cupcake.image = request.json['image']

  db.session.commit()

  serialized_cupcake = serialize_cupcake(cupcake)

  return jsonify(cupcake=serialized_cupcake)

@app.route("/api/cupcakes/<int:cupcake_id>", methods=["DELETE"])
def delete_cupcake(cupcake_id):
  """Update info on a specific cupcake"""

  Cupcake.query.filter_by(id=cupcake_id).delete()

  db.session.commit()

  return jsonify (message="Deleted")