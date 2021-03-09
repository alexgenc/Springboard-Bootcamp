/**

  Write a function called unroll, which takes in a square array of arrays (i.e. a grid with n rows and n columns). unroll should take in such a square array and return a single array containing the values in the square. You should obtain the values by traversing the square in a spiral: from the top-left corner, move all the way to the right, then all the way down, then all the way to the left, then all the way up, and repeat.
 
*/    
const unroll = (arr) => {
  
  const result = [];
    
  while (arr.length) {
    result.push(
      ...arr.shift(),
      ...arr.map(a => a.pop()),
      ...(arr.pop() || []).reverse(),
      ...arr.map(a => a.shift()).reverse()
    );
  }
  return result;
}


const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

unroll(square);
unroll(smallerSquare);

module.exports = unroll;                   

// const cumbersomeUnroll = (arr) => {

//   let n = arr.length;

//   let result = [];

//   for (let num of arr[0]) {
//     result.push(num);
//   }

//   for (let i = 1; i < n ; i++) {
//     result.push(arr[i][n - 1]);
//   }

//   for (let i = n - 1; i >= 1; i--) {
//     result.push(arr[n - 1][i - 1]);
//   }

//   for (let i = n - 1; i > 1; i--) {
//     result.push(arr[i - 1][0])
//   }

//   for (let i = 1; i <= n - 2; i++) {
//     result.push(arr[1][i]);
//   }

//   for (let i = 2; i >= n - 3; i--) {
//     result.push(arr[2][i]);
//   }

//   console.log(result);

// }     



