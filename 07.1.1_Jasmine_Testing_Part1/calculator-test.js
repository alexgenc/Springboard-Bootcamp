
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(10000, 5, 5)).toEqual('188.71');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(10000, 8, 5.8)).toEqual('130.44');
});

it("should handle terribly high interest rates", function() {
  expect(calculateMonthlyPayment(1000, 40, 99)).toEqual('82.50');
});
