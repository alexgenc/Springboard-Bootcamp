/**
 
  findRotatedIndex

  Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

  Constraints:

  Time Complexity: O(log N)

  Examples:

  findRotatedIndex([3,4,1,2],4) // 1
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
  findRotatedIndex([37,44,66,102,10,22],14) // -1
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

*/

function findRotatedIndex(array, num) {
  const pivot = findPivot(array)
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    return binarySearch(array, num, 0, pivot - 1);
  } else {
    return binarySearch(array, num, pivot, array.length - 1);
  }
}

// Helper function for binary search
function binarySearch(array, num, start, end) {
  // Check for edge cases
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

// Helper function to find where the array sorting pivots
function findPivot(arr) {
  // Check for edge cases, only 1 item in array or array is fully sorted
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  
  let start = 0
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1
    else if (arr[start] <= arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
}

module.exports = findRotatedIndex