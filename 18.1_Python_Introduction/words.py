def print_upper_words(words):
    """print out each word on a separate line and in all uppercase. 

    # this should print "HELLO", "HEY", "YO", and "YES"

    print_upper_words(["hello", "hey", "goodbye", "yo", "yes"])
    """
    for word in words:
            print(word.upper())
           


def print_upper_words2(words, startLetter):
    """only prints words that start with the letter ‘e’ on a separate line and in all uppercase

    # this should print "ELBOW", and "EYE"

    print_upper_words2(["Elbow", "hey", "eye", "yo", "yes"])
    """
    for word in words:
        word = word.lower()
        startLetter = startLetter.lower()
        if startLetter == word[0]:
            print(word.upper())


def print_upper_words2_alternative(words):
    """only prints words that start with the letter ‘e’ on a separate line and in all uppercase

    # this should print "ELBOW", and "EYE"

    print_upper_words2(["Elbow", "hey", "eye", "yo", "yes"])
    """
    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())

            
def print_upper_words3(words, startLetter):
    """only prints words that start with one of the passed in letters on a separate line and in all uppercase

    # this should print "ALEX", and "MICHAEL"

    print_upper_words3(["Alex", "Michael", "Chicago", "Bahamas"], startLetter=["A", "M"])
    """
    for word in words:
        for letter in startLetter:
            if word.startswith(letter):
                print(word.upper())

# this should print "HELLO", "HEY", "YO", and "YES"

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"])
print_upper_words2(["Elbow", "hey", "eye", "yo", "yes"], "e")
print_upper_words2(["Elbow", "hey", "eye", "yo", "yes"], "E")
print_upper_words2_alternative(["Elbow", "hey", "eye", "yo", "yes"])
print_upper_words2_alternative(["Elbow", "hey", "eye", "yo", "yes"])
print_upper_words3(["Alex", "Michael", "Chicago", "Bahamas"], startLetter=["A", "M"])