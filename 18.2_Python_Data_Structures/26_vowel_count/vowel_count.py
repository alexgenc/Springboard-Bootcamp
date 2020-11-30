def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """

    vowels = 'aeiou'

    vowel_count = {}
    
    for char in phrase:
        lower_char = char.lower()
        if lower_char in vowels:
            vowel_count[lower_char] = vowel_count.get(lower_char, 0) + 1
    
    return vowel_count


print(f"{vowel_count('rithm school')} should return i': 1, 'o': 2")
print(f"{vowel_count('HOW ARE YOU? i am great!') } should return 'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1")
