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
//************************************************************************ */

const takeUntil = function (array, callback) {
  let result = [];
  for (let val of array) {
    // console.log(val)
    if (callback(val) === false) {
      result.push(val)
    } else { return result }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]))
console.log(assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood']))