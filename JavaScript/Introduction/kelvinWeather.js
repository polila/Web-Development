// Convert Celsius to Fahrenheit
function toFarenheit(n){
	return n * (9/5) + 32;
}
// Convert Celsius to Newtons
function newtonScale(n) {
	return Math.floor(n * (33 / 100));
}
// Since the value saved to kelvin will stay constant
const kelvin = 293;
// conversion
const celsius = kelvin - 273;
// rounds down to nearest integer
let fahrenheit = Math.floor(toFarenheit(celsius));
// string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature ${celsius} degrees Celsius is ${newtonScale(celsius)} in Newtons`);
