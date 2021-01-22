/** 
  
  sortedFrequency
  
  Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

  Constraints:

  Time Complexity: O(log N)

  Examples:

  sortedFrequency([1,1,2,2,2,2,3],2) // 4
  sortedFrequency([1,1,2,2,2,2,3],3) // 1
  sortedFrequency([1,1,2,2,2,2,3],1) // 2
  sortedFrequency([1,1,2,2,2,2,3],4) // -1
 
 */


function sortedFrequency(arr, num) {

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  // This loop will run until both the leftIdx and the rightIdx meet at the first index where num appears in the array.
  while (rightIdx !== leftIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal === num) {
      rightIdx = middleIdx;
    } else if (middleVal > num) {
      rightIdx--;
    } else {
      leftIdx++;
    }
  }

  // Set first index as either the leftIdx or rightIdx. 
  const firstIdx = leftIdx;
  // Reset rightIdx for the second loop where we'll find the last index the num appears in the array.
  rightIdx = arr.length - 1;

  // This loop will run until both the leftIdx and the rightIdx meet at the very next index of where where num appears for the last time in the array. If array is [1,2,2,2,3,4,5], they will meet at index 4.
  while (leftIdx !== rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal === num) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }
  
  // Set lastIdx as either the leftIdx or the rightIdx. As explained above, this is technically not the last index where num appears. It's actually last index + 1.
  const lastIdx = leftIdx;

  // We can find the number of times num appear in the array by subtracting firstIdx from lastIdx.
  let numNum = lastIdx - firstIdx;

  // Edge case #1, num only appears 1 time in the array so both firstIdx and lastIdx are the same. In that case, return 1 instead of 0.
  if (firstIdx === lastIdx) {
    numNum = 1;
  }

  // Edge case #2, num doesn't appear in the array. In that case, return -1 instead of 0.
  if (arr[firstIdx] !== num) {
    numNum = -1;
  }

  return numNum;
                           
}      

module.exports = sortedFrequency