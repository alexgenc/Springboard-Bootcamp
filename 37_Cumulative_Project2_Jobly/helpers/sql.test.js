const { sqlForPartialUpdate } = require("./sql")
const { BadRequestError } = require("../expressError");

// This function converts Js column names to SQL column names like this: columnName = column_name
// It returns an object with 2 properties: setCols and values
    // setCols is a string containing SQLized column names set to $1, $2, etc. for serialization
    // values is an array containing values from the passed in object 

const data1 = {
  firstName: "John"
}

const data2 = {
  firstName: "John",
  lastName: "Doe",
}

const data3 = {
  firstName: "John",
  lastName: "Doe",
  favoriteTeam: "Chicago Bulls"
}

const jsToSql = {
  firstName: "first_name",
  lastName: "last_name",
  favoriteTeam: "favorite_team"
}

describe("sqlForPartialUpdate tests", () => {
  it("should work with only 1 item as explained above", function() {
    const result = sqlForPartialUpdate(data1, jsToSql)
    expect(result).toEqual({
      setCols: `"first_name"=$1`,
      values: ["John"]
    })
  })

  it("should work with 2 items as explained above", function() {
    const result = sqlForPartialUpdate(data2, jsToSql)
    expect(result).toEqual({
      setCols: `"first_name"=$1, "last_name"=$2`,
      values: ["John", "Doe"]
    })
  })

  it("should work with 3 items as explained above", function() {
    const result = sqlForPartialUpdate(data3, jsToSql)
    expect(result).toEqual({
      setCols: `"first_name"=$1, "last_name"=$2, "favorite_team"=$3`,
      values: ["John", "Doe", "Chicago Bulls"]
    })
  })

  it("should throw an error if no data is passed in", () => {
    expect(() => { sqlForPartialUpdate({}, jsToSql) }).toThrow(BadRequestError);
  })
});