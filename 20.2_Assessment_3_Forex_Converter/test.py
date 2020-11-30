from unittest import TestCase
from app import app
from forex import check_currency, convert_currency

class FlaskTests(TestCase):
  def setUp(self):
        """Stuff to do before every test."""

        # get real python errors instead of flask errors
        app.config['TESTING'] = True

        # don't allow debug toolbar to work during testing
        app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

  def test_check_currency(self):
    with app.test_client() as client:
      self.assertEqual(check_currency('EUR'), "€")
      self.assertEqual(check_currency('GBP'), "£")

  def test_convert_currency(self):
    with app.test_client() as client:
      self.assertEqual(convert_currency('EUR', 'EUR', 1), 1)
      self.assertEqual(convert_currency('USD', 'USD', 1), 1)

  def test_homepage(self):
    with app.test_client() as client:
      res = client.get('/')
      self.assertIn(b'Convert', res.data)  
      self.assertIn(b'Convert To:', res.data) 