def intersection(l1, l2):
    """Return intersection of two lists as a new list::
    
        >>> intersection([1, 2, 3], [2, 3, 4])
        [2, 3]
        
        >>> intersection([1, 2, 3], [1, 2, 3, 4])
        [1, 2, 3]
        
        >>> intersection([1, 2, 3], [3, 4])
        [3]
        
        >>> intersection([1, 2, 3], [4, 5, 6])
        []
    """

    set1 = set(l1)
    return list(set1.intersection(l2))
   



print(f"{intersection([1, 2, 3], [2, 3, 4])} should return [2,3]")
print(f"{intersection([1, 2, 3], [1, 2, 3, 4])} should return [1,2,3]")
print(f"{intersection([1, 2, 3], [3, 4])} should return [3]")
print(f"{intersection([1, 2, 3], [4, 5, 6])} should return []")