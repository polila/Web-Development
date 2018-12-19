/*
Take a phrase like 'turpentine and turtles'and translate it into its "whale talk" equivalent:'UUEEIEEAUUEE'.
There are a few simple rules for translating text to whale language:
*	There are no consonants. Only vowels excluding "y"
*	The u's and e's are extra long, so we must double them in our program.
*/
function whaleTalk(str) {
	const vowels = ['a','e','i','o','u'];

	const resultArray = [];

	for (let i = 0; i < str.length; i++) {
	  for (let j = 0; j < vowels.length; j++) {
	    if (str[i] === vowels[j]) {
	      // double vowel when 'e' or 'u'
	      if (vowels[j] === 'e' || vowels[j] === 'u') {
	        resultArray.push(vowels[j]);
	      }
	      resultArray.push(vowels[j]);
	    }
	  }
	}
	return resultArray.join('').toUpperCase();
}
//test
console.log(whaleTalk('Hi, Human'));
console.log(whaleTalk('A whale of a deal!'));
console.log(whaleTalk('turpentine and turtles'));