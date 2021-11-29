const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  };
};

//*************************************************************************** */

const countLetters = function (sentence) {
  const results = {};
  for (let char of sentence) {
    // console.log(char)
    if (results[char]) {
      results[char] += 1
    } else {
      results[char] = 1
    }
  }
  delete results[" "];
  return results;
}
module.exports = countLetters;

console.log(countLetters("lighthouse in the house"))