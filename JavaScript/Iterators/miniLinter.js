/*
Review: Higher-Order Functions
*	Abstraction allows us to write complicated code in a way that's easy to reuse, debug, and understand for human readers
*	We can work with functions the same way we would any other type of data including reassigning them to new variables
*	JavaScript functions are first-class objects, so they have properties and methods like any object
*	Functions can be passed into other functions as parameters
*	A higher-order function is a function that either accepts functions as parameters, returns a function, or both
Review: Iterators
*	.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined. 
*	.map() executes the same code on every element in an array and returns a new array with the updated elements. 
*	.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria. 
*	.findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition. 
*	.reduce() iterates through an array and takes the values of the elements and returns a single value. 
*	All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.
*/
/*
Objective:
In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph. 
This is the same type of work that word processing software does. 
Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application.
*	Create a miniature version of a linter using array methods that you have learned.
For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods
*/
let overusedWords = ['really','very','basically'];

let unnecessaryWords = ['extremely','literally','actually'];
// A function to split the string into individual words (elements) in a 1-D array
function toArray(str) {
  let arr = [];
  let i = 0;
  let word;
  while (i < story.length) {
    word = '';
    do {
      word += story[i];
      i++;
    } while (story[i] !== ' ' && i < story.length);
    arr[i] = word;
    i++;
  }
  return arr.filter(word => word !== undefined || word !== ',' ||('A'<= word && word <= 'Z') || ('a' <= word && word <= 'z') || word !== '');
}
/*
SUGGESTED SOLUTION:
let storyWords = story.split(' ');
*/
let storyWords = toArray(story);
/*
SUGGESTED SOLUTION:
let betterWords = storyWords.filter(function(word) {
	!unnecessaryWords.includes(word);
})
*/
let betterWords = storyWords.filter(word => word !== 'extremely' ||  word !== 'literally' || word !== 'literally');

/*
SUGGESTED SOLUTION:
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;
for (word of storyWords) {
	if (word === "really") {
		reallyCount += 1;
	} else if (word === "very") {
		veryCount += 1;
	} else if (word === "basically") {
		basicallyCount += 1;	
	}
}
*/
let duplicates = [0,0,0];
for (let i = 0; i < betterWords.length; i++) {
  for (let j = 0; j < overusedWords.length; j++) {
    if (overusedWords[j] === betterWords[i]) {
      duplicates[j]++;
    }
  }
}
/*
SUGGESTED SOLUTION:
let sentencesCount = 0;
for (word of storyWords) {
	if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
	sentencesCount += 1;
	}
}
*/
let sentences = 0;
for (let i = 0; i < story.length; i++) {
  if (story[i] === '.' || story[i] === '!') {
    sentences++;
  }
}

console.log('Word count: ' + storyWords.length);
console.log('Sentence count: ' + sentences);
for (let i = 0; i < duplicates.length; i++) {
  console.log(overusedWords[i] + ": " + duplicates[i]);
}
console.log(betterWords.join(' '));