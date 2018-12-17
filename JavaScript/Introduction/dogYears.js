// 8 years in a human's life equates to 45 years in a dog's life.
// The first two years of a dog's life count as 10.5 dog years each.
// Each year following equates to 4 dog years.

let myAge = 24;

let earlyYears = 2;

earlyYears *= 10.5;

let laterYear = myAge - 2;

laterYear *= 4;

console.log(`early years: ${earlyYears} | later years: ${laterYear}`);

let myName = "Patrick".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${earlyYears + laterYear} years old in dog years.`);
