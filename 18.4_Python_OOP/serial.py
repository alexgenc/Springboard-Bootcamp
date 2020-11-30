"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start):
        """
        create a new generator starting at start
        """
        
        self.start_next = start
        self.original_start = start

    def __repr__(self):
        """Show representation."""

        return f"<SerialGenerator start={self.original_start} next={self.start_next}>"

    def generate(self):
        """
        generate next serial in order
        """
        self.start_next = self.start_next + 1
        return self.start_next - 1
    
    def reset(self):
        """
        reset serial number counting to original start value
        """
        self.start_next = self.original_start


serial = SerialGenerator(start=100)

