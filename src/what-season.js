const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return console.log('Unable to determine the time of year!');
  if (!date.getMonth())  throw new Error();
  if (date.getMonth() === 2 && date.getDate() > 29)  throw new Error();
  
  let month = date.getMonth();
  season = '';
  
  if(month > 1 && month < 5) { season = 'spring' };
  if(month > 4 && month < 8) { season = 'summer' };
  if(month > 7 && month < 11) { season = 'autumn' };
  if(month === 11 || month >= 0 && month < 2) { season = 'winter' };

  return season;
};
