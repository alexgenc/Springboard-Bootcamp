def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    # join method
    # phrase_list = list(phrase)
    # phrase_list.reverse()
    # print(("").join(phrase_list))

    #slicing method
    # str[start:stop:step]
    return phrase[::-1]


print(f"{reverse_string('awesome')} should return emosewa")
print(f"{reverse_string('sauce')} should return ecuas")

