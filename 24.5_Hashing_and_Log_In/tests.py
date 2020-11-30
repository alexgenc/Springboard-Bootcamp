from unittest import TestCase
from app import app
from models import db, User, Feedback

# Use test database and don't clutter tests with SQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///feedback_test'
app.config['SQLALCHEMY_ECHO'] = False

# don't allow debug toolbar to work during testing
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

# Make Flask errors be real errors, rather than HTML pages with error info
app.config['TESTING'] = True

db.drop_all()
db.create_all()

USER_DATA = {
    "username": "Test_User",
    "password": "1234",
    "email": "testuser@test.com",
    "first_name": "test",
    "last_name": "user"
}

USER_DATA_2 = {
    "username": "Test_User",
    "password": "1234"
}


class FlaskTests(TestCase):
    def setUp(self):
        """Stuff to do before every test."""

    def tearDown(self):
        """Clean up."""
        db.session.rollback()    
        
    def test_root(self):
        with app.test_client() as client:
            res = client.get('/', follow_redirects=True)
            self.assertEqual(res.status_code, 200)
            self.assertIn(b'Register', res.data) 
            self.assertIn(b'Sign Up', res.data) 
    
    def test_login(self):
        with app.test_client() as client:
            res = client.get('/login')
            self.assertEqual(res.status_code, 200)
            self.assertIn(b'Log In', res.data) 
            self.assertIn(b'Username', res.data) 
            self.assertIn(b'Password', res.data) 
            self.assertIn(b'Login', res.data) 

    def test_register_get(self):
        with app.test_client() as client:
            res = client.get('/register')
            self.assertEqual(res.status_code, 200)
            self.assertIn(b'Register', res.data) 
            self.assertIn(b'Username', res.data) 
            self.assertIn(b'Password', res.data) 
            self.assertIn(b'Email', res.data) 
            self.assertIn(b'First Name', res.data) 
            self.assertIn(b'Last Name', res.data) 
            self.assertIn(b'Sign Up', res.data) 

  