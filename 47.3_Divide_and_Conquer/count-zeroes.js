/**
 
  countZeroes

  Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

  Constraints:

  Time Complexity: O(log N)

  Examples:

  countZeroes([1,1,1,1,0,0]) // 2
  countZeroes([1,0,0,0,0]) // 4
  countZeroes([0,0,0]) // 3
  countZeroes([1,1,1,1]) // 0

*/

function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  // The loop will run as long as leftIdx and rightIdx are different values
  while (leftIdx !== rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal === 1) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx;
    }
  }

  // When we exit the loop, both leftIdx and rightIdx will have the same value which will be the first index where 0 appears in the array. We can get the number of zeroes in the array by subtracting either the leftIdx or rightIdx from the number of items in the array.

  let NumZeroes = arr.length - leftIdx;

  // There's one edge case where the array doesn't contain any 0's. We can account for this by checking if arr[leftIdx] is actually 0. If it's not, that means the array only contains 1's and doesn't contain any 0's.
  if (arr[leftIdx] !== 0) {
    NumZeroes = 0;
  }

  return NumZeroes;

}

module.exports = countZeroes