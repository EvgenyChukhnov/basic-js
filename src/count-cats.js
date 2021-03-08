const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let newArr = backyard.flat().filter( el => el === '^^');
  
  return newArr.length;
};
