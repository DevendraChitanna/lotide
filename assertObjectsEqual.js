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

//*************************************************************************** */
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) === Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }


  }
  return true;
};
//*********************************************************************** */

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`โโโ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`๐๐๐Assertion Failed: ${actual} !== ${expected}`)
  }
};
module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })