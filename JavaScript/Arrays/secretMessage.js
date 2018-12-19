/*
Using array methods, transform an array of strings into a secret message! 
Consult https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array for methods
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 
'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 
'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', 
'-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

const size1 = secretMessage.length

secretMessage.pop();
//test
const size2 = secretMessage.length;

secretMessage.push('to','program');

const index = secretMessage.indexOf('easily');

secretMessage[index] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage.slice();

const str1 = secretMessage.join(' ');
console.log(str1);

console.log();

const index1 = secretMessage.indexOf('get');
const left = secretMessage.slice(0,index1);

const index2 = secretMessage.indexOf('time,');
const right = secretMessage.slice(index2+1,secretMessage.length-1);

const str2 = left.join(' ') + ' know, ' + right.join(' ');

console.log(str2);