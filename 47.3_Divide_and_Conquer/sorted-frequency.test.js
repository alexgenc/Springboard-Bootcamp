const sortedFrequency = require("./sorted-frequency")

describe("#sortedFrequency", function(){
  it("returns the frequency", function(){
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 8, 12, 19], 19)).toBe(1)
    expect(sortedFrequency([1, 1, 2, 2, 3, 5, 5, 5, 5, 5, 5, 5, 6], 5)).toBe(7)
    expect(sortedFrequency([1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 9, 11], 6)).toBe(2)
    expect(sortedFrequency([1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 9, 11], 7)).toBe(3)
    expect(sortedFrequency([1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 9, 11], 9)).toBe(1)
    expect(sortedFrequency([1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 9, 11], 11)).toBe(1)
  })
})
