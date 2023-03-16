const convertToCelsius = function (imperial) {
  celsius = ((imperial - 32) * (5 / 9))
  roundedC = Math.round(celsius * 10) / 10;
  return roundedC
};

const convertToFahrenheit = function (metric) {
  farenheit = ((metric * 9) / 5 + 32)
  roundedF = Math.round(farenheit * 10) / 10;
  return roundedF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};