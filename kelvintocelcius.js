// The forecast today in Kelvin
const kelvin = 293;

// Convert Kelvin to Celsius
const celsius = kelvin - 273;

// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = Math.floor(celsius * .33);

console.log(`${kelvin} Kelvin 
= ${celsius} Celsius 
= ${fahrenheit} Fahrenheit
= ${newton} Newton temperature.`);