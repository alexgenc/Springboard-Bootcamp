def last_element(lst):
    """Return last item in list (None if list is empty.
    
        >>> last_element([1, 2, 3])
        3
        
        >>> last_element([]) is None
        True
    """


    length_of_list = len(lst)

    if length_of_list == 0:
        return None
    
    return lst[length_of_list - 1]


print(f"{last_element([1,2,3])} should return 3")
print(f"{last_element([1,234,'hello'])} should return hello")
print(f"{last_element([])} should return None")
print(f"{last_element([]) is None} should return True")

