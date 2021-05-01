function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // The above while loop will stop running when either i or j is not less than their respective array length. At that point, depending on which of them gets exhausted first, we need to keep incrementing the other one and push the remaining values in that respective array to our results array.

  // This loop will run if j gets exhausted first. So we need to add the remaining items in arr1 to our results array.
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // This loop will run if i gets exhausted first. So we need to add the remaining items in arr2 to our results array.
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}


function mergeSort(arr) {

  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };