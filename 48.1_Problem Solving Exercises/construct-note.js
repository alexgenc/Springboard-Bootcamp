/*

Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints
-Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Test Cases
-constructNote('aa', 'abc') // false
-constructNote('abc', 'dcba') // true
-constructNote('aabbcc', 'bcabcaddff') // true

*/


const constructNote = (msg, letters) => {

  if(msg.length === 0) return true;

  const msgFreq = freqBuilder(msg);
  const lettersFreq = freqBuilder(letters);

  console.log("msg", msgFreq);
  console.log("letters", lettersFreq);

  for(let key in msgFreq) {
    console.log(key);
    if(!lettersFreq[key] || lettersFreq[key] < msgFreq[key]) {
      console.log(key, lettersFreq[key], msgFreq[key]);
      return false
    }
  }

  return true;
}

// Helper function for determining frequencies of each letter
const freqBuilder = (str) => {

  let freqObj = {};

  for(let char of str) {
    freqObj[char] = (freqObj[char] || 0) + 1;
  }

  return freqObj;

}

// console.log(constructNote('aa', 'abc'));
console.log(constructNote('a', 'b'));
// console.log(constructNote('abc', 'dcba'));
// console.log(constructNote('aabbcc', 'bcabcaddff'));
// console.log(constructNote('fihjjjjei', 'hjibagacbhadfaefdjaeaebgi'));