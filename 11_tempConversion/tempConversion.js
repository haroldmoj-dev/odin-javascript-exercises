const convertToCelsius = function(f) {
  c = ((f - 32)*(5/9)).toFixed(1);
  c = Number(c);
  return c;
};

const convertToFahrenheit = function(c) {
  f = (c*(9/5)+32).toFixed(1);
  f = Number(f);
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
