def weekday_name(day_of_week):
    """Return name of weekday.
    
        >>> weekday_name(1)
        'Sunday'
        
        >>> weekday_name(7)
        'Saturday'
        
    For days not between 1 and 7, return None
    
        >>> weekday_name(9)
        >>> weekday_name(0)
    """

    days_of_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
 
    if day_of_week < 1 or day_of_week > 7:
        return None

    return days_of_week[day_of_week - 1]    



print(f"{weekday_name(1)} should return Sunday")
print(f"{weekday_name(4)} should return Wednesday")
print(f"{weekday_name(7)} should return Saturday")
print(f"{weekday_name(0)} should return None")
print(f"{weekday_name(9)} should return None")





