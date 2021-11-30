const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  };
};
//**************************************************************************** */

const findKey = function (obj, call) {
  //scan obj and return the first key that the make the callback true
  // let keys = Object.keys(obj)
  // console.log(keys)
  for (let val in obj) {
    // console.log(obj[val])
    if (call(obj[val])) {
      return val
    }
  }
  return undefined
};
module.exports = findKey;



// console.log(assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2), "noma"))
