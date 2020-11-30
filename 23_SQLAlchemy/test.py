from unittest import TestCase
from app import app
from models import User

class FlaskTests(TestCase):
  def setUp(self):
        """Stuff to do before every test."""

        # get real python errors instead of flask errors
        app.config['TESTING'] = True

        # don't allow debug toolbar to work during testing
        app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

  def test_homepage(self):
    with app.test_client() as client:
      res = client.get('/')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Latest Posts', res.data) 
      self.assertIn(b'Post by', res.data) 

  def test_users_page(self):
    with app.test_client() as client:
      res = client.get('/users')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Users', res.data) 
      self.assertIn(b'Add User', res.data)

  def test_add_user_page(self):
    with app.test_client() as client:
      res = client.get('/users/new')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'First Name', res.data)
      self.assertIn(b'Last Name', res.data)
      self.assertIn(b'Image URL', res.data)
  
  def test_user_details_page(self):
    with app.test_client() as client:
      res = client.get('/users/2')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Edit User', res.data)
      self.assertIn(b'Delete User', res.data)

  def test_new_posts_page(self):
    with app.test_client() as client:
      res = client.get('/users/2/posts/new')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Title', res.data)
      self.assertIn(b'Content', res.data)
      self.assertIn(b'Add Post', res.data)
      self.assertIn(b'Cancel', res.data)

  def test_post_details_page(self):
    with app.test_client() as client:
      res = client.get('/posts/10')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Post by', res.data)
      self.assertIn(b'Edit Post', res.data)
      self.assertIn(b'Delete Post', res.data)
  
  def test_edit_post_page(self):
    with app.test_client() as client:
      res = client.get('/posts/10/edit')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Title', res.data)
      self.assertIn(b'Content', res.data)
      self.assertIn(b'Submit Changes', res.data)
      self.assertIn(b'Cancel', res.data)

  def test_tags_page(self):
    with app.test_client() as client:
      res = client.get('/tags')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Tags', res.data)
      self.assertIn(b'Add Tag', res.data)

  def test_add_tag_page(self):
    with app.test_client() as client:
      res = client.get('/tags/new')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Tag Name', res.data)
      self.assertIn(b'Add Tag', res.data)
      self.assertIn(b'Cancel', res.data)
  
  def test_specific_tag_page(self):
    with app.test_client() as client:
      res = client.get('/tags/7')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Posts Tagged With', res.data)
      self.assertIn(b'Edit Tag', res.data)
      self.assertIn(b'Delete Tag', res.data)

  def test_edit_tag_page(self):
    with app.test_client() as client:
      res = client.get('/tags/7/edit')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Tag Name', res.data)
      self.assertIn(b'Update Tag', res.data)
      self.assertIn(b'Cancel', res.data)
  