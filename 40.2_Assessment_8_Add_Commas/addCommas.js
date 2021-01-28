/*

  Write a function called addCommas which accepts a number and converts it into a string formatted with commas added for readability.

  Examples of the output we’d like:

  Input	      Expected Output
  1234	      “1,234”
  1000000	    “1,000,000”
  9876543210	“9,876,543,210”
  6	          “6”
  -10	        “-10”
  -5678	      “-5,678”
  12345.678	  “12,345.678” (bonus)
  -3141592.65	“-3,141,592.65” (bonus)

  Write tests for these (non-bonus) cases and make sure your code passes these. Feel free to add any other tests you deem necessary.

*/

const addCommas = (num) => {

  // Turn num into a string
  let numStr = num.toString();

  // Check if num actually needs a comma
  if (numStr.length <= 3 && !numStr.includes(".")) {
    return numStr;
  }

  // Split num at decimal point if needed. Ex: 1234.567 => [1234, 567]
  const numArr = numStr.includes(".") ? numStr.split(".") : [numStr];

  // Get the number before the decimal point from the numArr
  const number = numArr[0];

  // Get the length of the number string
  let numLength = number.length;

  // We'll need to place a comma every 3 digits. Calculate if number is evenly divisible by 3 or if there'll be extra digits. Ex: 123000 => extraDigits: 0, 12345 => extraDigits: 2
  let extraDigits = numLength % 3;

  // Get the extraDigits if it exists, and initialize a variable with that.
  let beginningOfNum = extraDigits ? number.slice(0, extraDigits) : null;
  
  // Initialize an empty array to store num parts. We'll use this array to join everything.
  let storeNumParts = [];

  // If beginningOfNum exists, store it in StoreNumParts.
  if (beginningOfNum) {
    storeNumParts.push(beginningOfNum);
  }

  // Get the remaining number length to use inside the loop
  let lengthToLoop = numLength - extraDigits;

  // Start a while loop to split up the number every 3 digits
  while (lengthToLoop > 0) {
    let numPart = number.slice(extraDigits, extraDigits + 3);
    storeNumParts.push(numPart);
    extraDigits += 3;
    lengthToLoop -= 3;
  }
  
  // Join numParts together on a ","
  const completeNum = storeNumParts.join(",");

  // Initialize an optionalFinalNum variable. This variable will only exist for numbers with a decimal point
  let optionalFinalNum;
  
  // If number has something after the decimal point, add that. 
  if (numArr[1]) {
    optionalFinalNum = [completeNum, numArr[1]].join(".");
  }

  return optionalFinalNum ? optionalFinalNum : completeNum;
}  

module.exports = addCommas;