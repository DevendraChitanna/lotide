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
//getting an undefined value from assertArraysEqual
//**************************************************************************** */

const middle = function (arr) {
  let result = [];

  if (arr.length < 2) {
    return result;
  }

  if (arr.length % 2 === 1) {
    let center = Math.floor(arr.length / 2);
    center += 1;
    // console.log("center index", center)
    result.push(center)
    return result
  }

  if (arr.length % 2 === 0 && arr.length > 2) {
    let center = Math.floor(arr.length / 2);
    result.push(center)
    center += 1;
    result.push(center)
    return result;
  }


}
console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]))

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]))