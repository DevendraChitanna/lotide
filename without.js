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

//************************************************************************* */

const without = function (arr, rem) {
  //new array, so i dont change original
  let arr2 = [...arr];
  //loop through the array
  arr2.forEach((e, i) => {
    //loop through rem
    //check if anything from rem is equal to the element in array
    rem.forEach(num => {
      if (e === num) {
        //if element is the same as rem(num), cut out that value from array
        arr2.splice(i, 1)

      }
    })
  });
  return arr2;
};
module.exports = without;

// console.log(without([1, "2", 3], ["2"]))