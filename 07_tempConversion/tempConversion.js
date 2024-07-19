const convertToCelsius = function(a) {
  a = a -32
  a = a * 5 / 9
  return Math.round(a * 10) /10

  
};

const convertToFahrenheit = function(a) {
  a = a * 9/5
  a = a + 32
  return Math.round(a * 10) /10
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
