const ExpressError = require('./error');

// Helper functions
function getQuery(req) {
  // Check if query is empty
  if (!req.query.nums) {
    throw new ExpressError("Please submit a list of numbers as a query string", 400);
  }

  // Get query string from req.query
  queryString = req.query['nums']

  // Remove "," from the query string
  cleanQuery = queryString.split(",")

  const numbers = [];

  // Convert strings to integers
  for (num of cleanQuery) {
    num = parseInt(num);
    
    // Check if there is a NaN, i.e., a string
    if (Number.isNaN(num)) {
      throw new ExpressError('All values must be numbers', 400)
    } else {
    numbers.push(num);
    }
  }

  return numbers;
}

function getMean(numbersArray) {
  // Create a total variable
  let total = 0;

  // Sum all numbers in the numbersArray
  for (num of numbersArray) {
    total += num;
  }

  // Calculate mean
  let result = total / numbersArray.length;

  return result;
}

function getMedian(numbersArray) {
  // Sort numbers in order
  let sortedNums = numbersArray.sort((a, b) => a - b);

  // Initialize a median variable
  let median;

  // Check if there are even or odd number of values in an array to calculate the median
  if (sortedNums.length % 2 === 0) {
    // Find middle index
    let middleIndex = sortedNums.length / 2;

    // Because of the way array indexing works, subtract -1 from the middle index value.
    const middleValue1 = sortedNums[middleIndex-1];
    const middleValue2 = sortedNums[middleIndex];
    
    // Calculate median
    median = (middleValue1 + middleValue2) / 2;

  }  else {
    // Find middle index
    let middleIndex = Math.round(sortedNums.length / 2)
    
    // Because of the way array indexing works, subtract -1 from the middle index value.
    const middleValue = sortedNums[middleIndex-1];
    
    // In this case, middleValue is the median.
    median = middleValue;
  }

  return median;
}

function getMode(numbersArray) {
  const frequency = {};
  let maxFreq = 0; 
  const modes = [];

  for (let i in numbersArray) {
    frequency[numbersArray[i]] = (frequency[numbersArray[i]] || 0) + 1; // increment frequency.

    if (frequency[numbersArray[i]] > maxFreq) { // is this frequency > max so far ?
      maxFreq = frequency[numbersArray[i]]; // update max.
    }
  }

  for (let k in frequency) {
    if (frequency[k] == maxFreq) {
      k = parseInt(k);
      modes.push(k);
    }
  }

  if (modes.length === 1) {
    return modes[0];
  } else {
    return modes.join(", ");
  }
  
}

module.exports = {
  getQuery,
  getMean,
  getMedian,
  getMode,
};