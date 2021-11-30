const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  };
};

//*************************************************************************** */
const findKeyByValue = function (obj, find) {
  for (let genre in obj) {
    // console.log("genre", obj[genre])
    if (obj[genre] === find) {
      // console.log("found")
      return genre
    }
  }
};
module.exports = findKeyByValue;



// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"))

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
