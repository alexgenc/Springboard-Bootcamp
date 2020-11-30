def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """
    if type(num) != int or num < 0:
        return None
    else:
        return phrase * num

print(f"{repeat('*', 3)} should return ***")
print(f"{repeat('abc', 2)} should return abcabc")
print(f"{repeat('abc', 0)} should return ''")
print(f"{repeat('abc', 'nope') is None} should return True")
print(f"{repeat('abc', -1) is None} should return True")