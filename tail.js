const assertEqual = require('./assertEqual');

//***************************************************************************** */
const tail = function (array) {
  let newArray;
  if (array.length <= 1) {
    return [];
  } else {
    newArray = array.slice(1);
    return newArray;
  }
};

module.exports = tail;


