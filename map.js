
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
//*************************************************************************** */



const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



console.log(assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']))
console.log(assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]))
console.log(assertArraysEqual(map(words, word => word + word), ['groundground', 'controlcontrol', 'toto', 'majormajor', 'tomtom']))