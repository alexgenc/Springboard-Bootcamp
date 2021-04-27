/*

Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

Test Cases
-twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
-twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
-twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

*/

const twoArrayObject = (keys, values) => {

  const Obj = {};
  let difference = keys.length - values.length;

  if(difference > 0) {
    while (difference > 0) {
      values.push(null);
      difference--;
    }
  }

  if(difference < 0) {
    while (difference < 0) {
      values.pop();
      difference++;
    }
  }

  for(let i = 0; i < keys.length; i++) {
    Obj[keys[i]] = values[i];
  }

  return Obj;
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]));
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]));
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2]));