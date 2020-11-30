from unittest import TestCase
from app import app
from models import Pet

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
      self.assertIn(b'Take Me HOME', res.data) 
      self.assertIn(b'Add a Pet', res.data) 

  def test_pet_page(self):
    with app.test_client() as client:
      res = client.get('/1')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Name', res.data) 
      self.assertIn(b'Species', res.data) 
      self.assertIn(b'Age', res.data) 
      self.assertIn(b'Notes', res.data) 

  def test_add_pet_page(self):
    with app.test_client() as client:
      res = client.get('/add')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Name', res.data) 
      self.assertIn(b'Species', res.data) 
      self.assertIn(b'Age', res.data) 
      self.assertIn(b'Additional Information', res.data) 
      self.assertIn(b'Photo URL', res.data) 
  
  def test_edit_pet_page(self):
    with app.test_client() as client:
      res = client.get('/1/edit')
      self.assertEqual(res.status_code, 200)
      self.assertIn(b'Age', res.data) 
      self.assertIn(b'Additional Information', res.data) 
      self.assertIn(b'Photo URL', res.data) 

