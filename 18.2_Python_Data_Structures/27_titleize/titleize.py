def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """

    return phrase.title()



print(f"{titleize('this is awesome')} should return This Is Awesome")
print(f"{titleize('oNLy cAPITALIZe fIRSt')} should return Only Capitalize First")


