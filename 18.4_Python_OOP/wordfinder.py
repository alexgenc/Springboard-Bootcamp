import random

"""Word Finder: finds random words from a dictionary."""


class WordFinder:
    """
    Find random words from a dictionary
    """
    def __init__(self, file_path,):
    """
    Open and read a dictionary, and report # of words read
    """
        content_file = open(file_path, "r")

        self.words = self.open_and_read(content_file)

        word_count = len(self.words)
        print(f"{word_count} words read")

    def open_and_read(self, content_file):
    """
    Return list of words
    """
        return [w.strip() for w in content_file]
        

    def random(self):
    """ 
    Return random word from words list
    """
        return random.choice(self.words)




class SpecialWordFinder(WordFinder):
    """
    Find words from a dictionary but exlude blank lines and comments
    """
    def open_and_read(self, content_file):
    """
    Return list of words but skip blank lines and comments
    """
        return [w.strip() for w in content_file
            if w.strip() and not w.startswith("#")]



wf = WordFinder("words.txt")
swf = SpecialWordFinder("words.txt")