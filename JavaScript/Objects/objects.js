/*
1.

*/












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

