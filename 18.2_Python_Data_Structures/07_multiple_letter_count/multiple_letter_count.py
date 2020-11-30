def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """

    letters = {}

    for char in phrase:
        letters[char] = letters.get(char, 0) + 1


    return letters


    

print(f"{multiple_letter_count('yay')} should return 'y': 2, 'a': 1")
print(f"{multiple_letter_count('Yay')} should return 'Y': 1, 'a': 1, 'y': 1")