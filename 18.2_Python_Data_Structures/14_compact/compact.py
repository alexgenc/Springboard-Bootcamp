def compact(lst):
    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """

    second_list = []

    for item in lst:
        if item:
            second_list.append(item)
    
    return second_list


    # return [val for val in lst if val]



print(f"{compact([0, 1, 2, '', [], False, (), None, 'All done'])} should return [1, 2, 'All done']")
