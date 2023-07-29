const convertToCelsius = function(temp) {
  convertedTemp = (temp - 32) * (5 / 9);
  temp = Math.round(convertedTemp * 10) / 10;
  return temp;
};

const convertToFahrenheit = function(temp) {
  convertedTemp = temp * (9 / 5) + 32;
  temp = Math.round(convertedTemp * 10) / 10;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
