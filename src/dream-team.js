const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return  members.filter( el => typeof el === 'string').map( el => el.trim().toUpperCase().split('').slice(0, 1)).flat().sort().join('')
};
