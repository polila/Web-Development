/*
1.
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
*/
const reverseArray = function(arr) {
  let reverseArray = [];
  for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    reverseArray[j] = arr[i];
  }
  return reverseArray;
}
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
/*
2.
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.
The greeting should take the following format:
"Oh powerful [stringElement], we humans offer our unconditional surrender!"
*/
const greetAliens = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  }
}
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);
/*
3.
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.
*/
const convertToBaby = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 'baby ' + arr[i] 
  }
  return arr;
}
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals)) 
/*
4.
We wrote a function, smallestPowerOfTwo(), which takes in an array.
Within our function, we create a new array results. 
We loop through the argument array and push in the smallest power of two which is greater than the current element.
It's not doing what we want. Can you fix our code, please?
*/
const numbers = [5, 3, 9, 30];
const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 2;
            while (j < number) {
              j *= 2;
            }
        results[i] = j;
      }
      return results
}
console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
/*
5.
Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.
Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'
*/
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}
const grudginglyAccept = (veg) => {
  console.log('Ok, I guess I will eat some ' + veg + '.');
}
const declineEverything = arr => {
  arr.forEach(politelyDecline);

}
const acceptEverything = arr => {
  arr.forEach(grudginglyAccept);
}
declineEverything(veggies);
acceptEverything(veggies);
/*
6.
Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.
*/
const numbers = [2, 7, 9, 171, 52, 33, 14]
const toSquare = num => num * num
const squareNums = arr => {
  return arr.map(toSquare);
}
console.log(squareNums(numbers));
/*
7.
Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'
*/
const shoutGreetings = arr => {
  newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[i].toUpperCase() + "!";
  }
  return newArray;
}
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
/*
8.
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.
*/
const sortYears = arr => {
  sorted = arr.sort();
  reverse = [];
  for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    reverse[j] = sorted[i];
  }
  return reverse;
}
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
/*
9.
Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.
*/
const justCoolStuff = (arr1, arr2) => {
  return arr1.filter(element => arr2.includes(element));
}
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
/*
10.
Write a function isTheDinnerVegan() that takes in an array of food objects in the format: 
{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.
const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
isTheDinnerVegan(meal); // Should return true
*/
const isTheDinnerVegan = obj => {
  for (var i = 0; i < obj.length; i++) {
    if (obj[i]['source'] !== 'plant') {
      return false;
    }
  }
  return true;
}
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
console.log(isTheDinnerVegan(dinner));
// Using the every() method
const isTheDinnerVegan = obj => {
	return obj.every(obj => obj.source === 'plant');
}
/*
11.
Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:
{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .
Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().
*/
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}]; 
const sortSpeciesByTeeth = objArr => {
  teethArr = [];
  for (let i = 0; i < objArr.length; i++) {
    teethArr[i] = objArr[i].numTeeth; 
  }
  teethArr.sort();
  objArrSorted = [];
  for (let i = 0; i < teethArr.length; i++) {
    value = teethArr[i];
    for (let j = 0; j < objArr.length; j++) {
      if (value === objArr[j].numTeeth) {
        objArrSorted[i] = objArr[j];
        break;
      }
    }
  }
  return objArrSorted;
}
// Using an arrow function expression to write a comparison function
const moreTeeth = (speciesObj1, speciesObj2) => {
  return speciesObj1.numTeeth < speciesObj2.numTeeth;
}
const sortSpeciesByTeeth = objArr => {
  for (let i = 0; i < objArr.length; i++) {
    for (let j = 0; j < objArr.length; j++) {
      if (moreTeeth(objArr[i], objArr[j])) {
        let temp =  objArr[i];
        objArr[i] = objArr[j];
        objArr[j] = temp;
      }
    }
  }
  for (let i = 0; i < objArr.length; i++) {
    console.log(objArr[i]);
  }
}
console.log(sortSpeciesByTeeth(speciesArray))
/* Should print >>>
[ { speciesName: 'human', numTeeth: 32 },
  { speciesName: 'dog', numTeeth: 42 },
  { speciesName: 'shark', numTeeth: 50 },
  { speciesName: 'alligator', numTeeth: 80 } ]
*/
/*
12.
Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'.
f the keys are in the array, your function should return the index at which they can be found. If they're not in the array, your function should return -1.
const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);
>>> Should return -1
*/
const findMyKeys = strArr => {
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'keys') {
      return i;
    }
  }
  return -1;
}
// Using .findIndex()
function findKey(element) {
  return element === 'keys';
}
const findMyKeys = strArr => {
	return strArr.findIndex(findKey);
}
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
console.log(findMyKeys(randomStuff))
// Should print 4
/*
13.
Write a function, dogFactory(). It should:
*	Have 3 parameters: name, breed, and weight
*	Expect weight to be a number
*	Expect name and breed to be strings
*	Return an object
*	Have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
Should return >>> { name: 'Joe', breed: 'Pug', weight: 27 }
*/
// Write your code here:
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(nameIn) {
      if (typeof nameIn === 'string') {
        this._name = nameIn;
      }
    },
    get breed() {
      return this._breed;
    },
    set breed(breedIn) {
      if (typeof breedIn === 'string') {
        this._breed = breedIn;
      }
    },
    get weight() {
      return this._weight;
    },
    set weight(weightIn) {
      if (typeof weightIn === 'number') {
        this._weight = weightIn;
      }
    },
    bark() {
      return 'ruff! ruff!'
    },
    eatTooManyTreats() {
      this.weight += 1;
    }
  }
}
const dog1 = dogFactory('Joe','Pug', 27);
console.log("Name: " + dog1.name);
console.log("Breed: " + dog1.breed);
console.log("Weight: " + dog1.weight);
dog1.bark();
dog1.eatTooManyTreats();
console.log("Weight: " + dog1.weight);

