
// Constant temperature is 293 kelvin
const Kelvin = 293;
// Celsius is 273 degrees less than kelvin
let Celsius = (Kelvin - 273);
 
// Convert Fahrenheit to Celsius formula and round down using floor method from built-in Math object
let Fahrenheit = Math.floor(Celsius * (9/5) + 32);
console.log('The temperature is ' +Fahrenheit+ ' degrees Fahrenheit.')
