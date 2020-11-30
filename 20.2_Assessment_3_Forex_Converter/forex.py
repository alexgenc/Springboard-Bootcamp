from forex_python.converter import CurrencyCodes
from forex_python.converter import CurrencyRates


def check_currency(currency):
  """ check currency is valid"""
  c = CurrencyCodes()
  return c.get_symbol(currency)

def convert_currency(currency1, currency2, amount):
  """ convert currency1 to currency2"""
  c = CurrencyRates()
  return c.convert(currency1, currency2, amount)

def check_amount(amount):
  """ check amount is valid, i.e., it doesn't contain any letters"""
  return not any(char.isalpha() for char in amount)