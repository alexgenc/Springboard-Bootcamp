def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    usethis = phrase.replace(" ", "").lower()
    return usethis == usethis[::-1]
  




print(f"{is_palindrome('tacocat')} should return True")
print(f"{is_palindrome('noon')} should return True")
print(f"{is_palindrome('robert')} should return False")
print(f"{is_palindrome('taco cat')} should return True")
print(f"{is_palindrome('Noon')} should return True")
