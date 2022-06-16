const ftoc = function(temperature) {
  let converted_temp = ((temperature - 32) * (5 / 9));
  return Math.round(converted_temp * 10) / 10;
  // return ((temperature - 32) * (5 / 9)).toFixed(1);
};

const ctof = function(temperature) {
  let converted_temp = ((temperature * (9 / 5)) + 32);
  return Math.round(converted_temp * 10) / 10;
  // return ((temperature * (5 / 9)) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
