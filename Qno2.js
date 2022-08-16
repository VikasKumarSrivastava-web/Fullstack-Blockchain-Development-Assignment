// Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
function celsiusToFahrenheit(temp) {
  return (9 * temp) / 5 + 32;
}
temp = 60;
ans = celsiusToFahrenheit(temp);
console.log(`${temp}°C is ${ans}°F`);

function fahrenheitToCelsius(temp) {
  return (5 / 9) * (temp - 32);
}
temp = 45;
ans = fahrenheitToCelsius(temp);
console.log(`${temp}°F is ${ans}°C`);
