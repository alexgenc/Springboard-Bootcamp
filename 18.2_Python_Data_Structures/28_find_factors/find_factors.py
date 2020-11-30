def find_factors(num):
    """Find factors of num, in increasing order.

    >>> find_factors(10)
    [1, 2, 5, 10]

    >>> find_factors(11)
    [1, 11]

    >>> find_factors(111)
    [1, 3, 37, 111]

    >>> find_factors(321421)
    [1, 293, 1097, 321421]
    """

    range_list = list(range(1, num+1))

    factors = []

    for item in range_list:
        if num % item == 0:
            factors.append(item)
    
    return factors


print(f"{find_factors(10)} should return [1, 2, 5, 10]")
print(f"{find_factors(11)} should return [1, 11]")
print(f"{find_factors(111)} should return [1, 3, 37, 111]")
print(f"{find_factors(321421)} should return [1, 293, 1097, 321421]")


