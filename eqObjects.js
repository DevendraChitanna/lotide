const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  };
};

//*************************************************************************** */

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  // console.log(Object.keys(object1).length)
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;

    }

  }
  return true;
};
//************************************ */

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
console.log(assertEqual(eqObjects(cd, dc), true))

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
console.log(assertEqual(eqObjects(cd, cd2), false))

//************************************ */

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // console.log(eqObjects(ab, ba)); // => true
// console.log(assertEqual(eqObjects(ab, ba), true)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// // console.log(eqObjects(ab, abc)); // => false
// console.log(assertEqual(eqObjects(ab, abc), false));
