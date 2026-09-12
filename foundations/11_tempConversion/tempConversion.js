const convertToCelsius = function(num) {
  let result = (num - 32) * (5 / 9);
  return Math.round(result);
};

const convertToFahrenheit = function(num) {
  let result = (num * (9 / 5)) + 32;
  return Math.round(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
