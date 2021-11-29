const eqArrays = function (actual, expected) {

  if (actual.length !== expected.length) {
    return false
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false
    }
  }
  return true;
}

//*********************************************************************** */

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
}


const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i]
    if (!results[char]) {
      results[char] = [];
    }
    results[char].push(i)
  }
  delete results[" "];
  return results
};
module.exports = letterPositions;
console.log(assertArraysEqual(letterPositions("hello"), {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
}))

assertArraysEqual(letterPositions("hello").e, [1]);


// const letterPositions = function (sentence) {
//   const results = {};
//   for (let i in sentence) {
//     // console.log(i)
//     for (let char of sentence) {
//       // console.log(char)
//       if (results[char]) {
//         results[char].push(i);
//       } else { results[char] = [i] }
//     }
//   }
//   return results
// };