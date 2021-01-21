const { BadRequestError } = require("../expressError");

/**

  This is a helper function used for updating object data. It takes two parameters:
  
  - dataToUpdate, should be an object containing new information in Js naming convention.
  @param dataToUpdate {Object}
      { 
        firstName: "value1", 
        lastName: "value2", 
        isAdmin: "value3" 
      }

  - jsToSql should be an object containing SQL column names for corresponding Js column names. 
  @param jsToSql {Object}  
      {
        firstName: "first_name",
        lastName: "last_name",
        isAdmin: "is_admin",
      }
  
  Afterwards, it sets the value of each key as $1, $2, etc. based on their index for serialization
    {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  
  @returns {Object} {SqlSetCols, dataToUpdate}

  @example {firstName: 'Aliya', age: 32} =>
    { 
      setCols: '"first_name"=$1, "age"=$2',
      values: ['Aliya', 32] 
    }

**/

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  // Get the keys of the passed in object
  const keys = Object.keys(dataToUpdate);
  // Check if passed in object actually contains data
  if (keys.length === 0) throw new BadRequestError("No data");

  // Convert column names from Js naming convention to SQL convention and for serialization
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
