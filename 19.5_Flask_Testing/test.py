from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


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
            self.assertIn('board', session)
            self.assertIn(b'<p>High Score:', res.data)
            self.assertIn(b'Your score is:', res.data)
            self.assertIn(b'Time Left:', res.data)
            self.assertIsNone(session.get('highscore'))
            self.assertIsNone(session.get('nplays'))
    
    def test_valid_word(self):
        """Test if word is valid by modifying the board in the session"""

        with app.test_client() as client:
            with client.session_transaction() as sess:
                sess['board'] = [["C", "A", "T", "T", "T"], 
                                 ["C", "A", "T", "T", "T"], 
                                 ["C", "A", "T", "T", "T"], 
                                 ["C", "A", "T", "T", "T"], 
                                 ["C", "A", "T", "T", "T"]]
        response = client.get('/check-guess?guess=cat')
        self.assertEqual(response.json['result'], 'ok')