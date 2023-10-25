//formula: (x − 32) × 5/9 °C
const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5/9);

  return celsius;
}

//formula: (x × 9/5 + 32) °F 
const convertToFahrenheit = function(celsius) {
  fahrenheit = (celsius * (9/5) + 32);

  return fahrenheit;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
