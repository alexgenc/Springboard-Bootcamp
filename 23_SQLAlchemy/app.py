"""Blogly application."""

from flask import Flask, request, redirect, render_template
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post, Tag, PostTag

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

app.config['SECRET_KEY'] = "SECRET!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()

# home route
@app.route("/")
def homepage():
  """Homepage"""

  posts = Post.query.order_by(Post.created_at.desc()).limit(10).all()

  return render_template ("homepage.html", posts=posts)

#-----users-------

# users route
@app.route("/users")
def get_users():
  """Display all users"""

  users = User.query.order_by(User.last_name, User.first_name).all()
  return render_template ("users.html", users=users)

# add new user route
@app.route("/users/new", methods=["GET", "POST"])
def add_users():
  """Add new user via form"""

  if request.method == "GET":
    return render_template("add_user.html")
  
  if request.method == "POST":
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    image_url = request.form['image_url']

    new_user = User(first_name = first_name, last_name = last_name, image_url = image_url or None)

    db.session.add(new_user)
    db.session.commit()

    return redirect ('/users')

# specific user route
@app.route("/users/<int:user_id>")
def get_user(user_id):
  """Show info of a user"""

  user = User.query.get_or_404(user_id)

  posts = Post.query.filter_by(user_id = user_id)

  return render_template("user_detail.html", user=user, posts=posts)

# edit user route
@app.route("/users/<int:user_id>/edit", methods=["GET", "POST"])
def edit_user(user_id):
  """Edit user information via form"""

  user = User.query.get_or_404(user_id)

  if request.method == "GET":
    return render_template("edit_user.html", user=user)

  if request.method == "POST":

    first_name = request.form['first_name']
    last_name = request.form['last_name']
    image_url = request.form['image_url']

    user.first_name = first_name
    user.last_name = last_name
    user.image_url = image_url

    db.session.add(user)
    db.session.commit()

    return redirect ("/users")

# delete user route
@app.route("/users/<int:user_id>/delete", methods=["POST"])
def delete_user(user_id):
  """Delete user"""
  
  User.query.filter_by(id=user_id).delete()
  db.session.commit()

  return redirect ("/users")


#-----posts-------

# new post route
@app.route("/users/<int:user_id>/posts/new", methods=["GET", "POST"])
def new_post(user_id):
  """Create new post"""

  user = User.query.get_or_404(user_id)
  tags = Tag.query.all()

  if request.method == "GET":
    return render_template("new_post.html", user=user, tags=tags)
  
  if request.method == "POST":
    title = request.form["title"]
    content = request.form["content"]
    tag_ids = request.form.getlist("tags")

    tags = Tag.query.filter(Tag.id.in_(tag_ids)).all()

    new_post = Post(title=title, content=content, user=user, tags=tags)

    db.session.add(new_post)
    db.session.commit()

    return redirect(f"/users/{user_id}")

# specific post route
@app.route("/posts/<int:post_id>")
def get_post(post_id):
  """Get a specific post"""

  post = Post.query.get_or_404(post_id)
  tags = post.tags

  return render_template("post.html", post=post, tags=tags)


# edit posts route
@app.route("/posts/<int:post_id>/edit", methods=["GET", "POST"])
def edit_post(post_id):
  """edit post"""

  post = Post.query.get_or_404(post_id)
  tags = Tag.query.all()

  if request.method == "GET":
    return render_template("edit_post.html", post=post, tags=tags)

  if request.method == "POST":
    title = request.form['title']
    content = request.form['content'] 
    tag_ids = request.form.getlist("tags")

    tags = Tag.query.filter(Tag.id.in_(tag_ids)).all()

    post.title = title
    post.content = content
    post.tags = tags

    db.session.add(post)
    db.session.commit()

    return redirect(f"/posts/{post.id}")


# delete post route
@app.route("/posts/<int:post_id>/delete", methods=["POST"])
def delete_post(post_id):
  """delete post"""
  
  post = Post.query.get_or_404(post_id)

  Post.query.filter_by(id=post_id).delete()
  db.session.commit()

  return redirect (f"/users/{post.user_id}")

#-----tags-------

# tags route
@app.route("/tags")
def get_tags():
  """list all tags"""

  tags = Tag.query.all()

  return render_template("tags.html", tags=tags)

# specific tag route
@app.route("/tags/<int:tag_id>")
def get_specific_tag(tag_id):
  """show info on a single tag"""

  tag = Tag.query.get(tag_id)

  posts = tag.posts

  return render_template("specific_tag.html", tag=tag, posts=posts)

# add tag route
@app.route("/tags/new", methods=["GET", "POST"])
def add_tag():
  """add a new tag"""

  if request.method == "GET":
    return render_template("new_tag.html")
  
  if request.method == "POST":

    name = request.form['name']

    new_tag = Tag(name=name)

    db.session.add(new_tag)
    db.session.commit()

    return redirect("/tags")

# edit tag route
@app.route("/tags/<int:tag_id>/edit", methods=["GET", "POST"])
def edit_tags(tag_id):
  """edit a tag"""

  tag = Tag.query.get(tag_id)
  
  if request.method == "GET":
    return render_template("edit_tag.html", tag=tag)

  if request.method == "POST":
    name = request.form['name']

    tag.name = name

    db.session.add(tag)
    db.session.commit()

    return redirect(f"/tags/{tag.id}")

# delete tag route
@app.route("/tags/<int:tag_id>/delete", methods=["POST"])
def delete_tags(tag_id):
  """delete a tag"""

  Tag.query.filter_by(id=tag_id).delete()
  db.session.commit()

  return redirect ("/tags")