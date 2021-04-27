/*

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Constraints
-Time Complexity - O(N + M)

Test Cases
-sameFrequency(182,281) // true
-sameFrequency(34,14) // false
-sameFrequency(3589578, 5879385) // true
-sameFrequency(22,222) // false

*/

const sameFrequency = (num1, num2) => {

  let freqNum1 = frequencyBuilder(num1.toString());
  let freqNum2 = frequencyBuilder(num2.toString());

  for(let key in freqNum1) {
    return freqNum1[key] === freqNum2[key];
  }
}


// Helper function for determining frequencies of each letter
const frequencyBuilder = (str) => {

  let freqObj = {};

  for(let char of str) {
    freqObj[char] = (freqObj[char] || 0) + 1;
  }

  return freqObj;

}


console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22,222));