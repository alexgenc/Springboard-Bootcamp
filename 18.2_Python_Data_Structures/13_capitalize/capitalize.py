def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """

    return phrase.capitalize()



print(f"{capitalize('python')} should return Python")
print(f"{capitalize('only first word')} should return Only first word")