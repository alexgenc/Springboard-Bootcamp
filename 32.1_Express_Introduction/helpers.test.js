const {
  getMean,
  getMedian,
  getMode
} = require("./helpers");


describe("Mean related tests.", function () {
  it("Calculates the mean value of an array of numbers.", function () { 
    expect(getMean([1,2,3])).toEqual(2)
  })
  it("Calculates the mean value of an array of numbers.", function () { 
    expect(getMean([7,10,6,9,8])).toEqual(8)
  })
})

describe("Median related tests.", function(){
  it("Calculates the median value of an odd set.", function () { 
    expect(getMedian([1,3,4,7,12])).toEqual(4)
  })
  it("Calculates the median value of an even set.", function(){ 
    expect(getMedian([-9,-3,1,3,4,5,6,16])).toEqual(3.5)
  })
})

describe("Mode related tests.", function () {
  it("Calculates the mode value of an array of numbers with 1 mode.", function () { 
    expect(getMode([1,1,1,2,2,3])).toEqual(1)
  })
  it("Calculates the mode value of an array of numbers with 2 modes.", function () { 
    expect(getMode([1,1,1,2,2,2,3])).toEqual("1, 2")
  })
})