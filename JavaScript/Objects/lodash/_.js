/*
Reference: https://lodash.com/
Objective: Implement functionality from the lodash.js library. 
*	Specify the functionality of the method we are implementing
*	Ideate a game plan for how to implement this functionality in code
*	Implement our game plan
*	Test our code to ensure it works as expected
*/
const _ = {
  // Clamps number within the inclusive lower and upper bounds.
  clamp(number, lower, upper) {

    let lowerClampedValue = Math.max(number, lower);

    let clampedValue = Math.min(lowerClampedValue, upper);

    return clampedValue;
  },
  // Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.
  inRange(number, startValue, endValue) {

    if (endValue === undefined) {

      endValue = startValue;

      startValue = 0;
    }

    if (Math.max(startValue, endValue) === startValue) {

      temp = startValue;

      startValue = endValue;

      endValue = temp;
    }

    n = this.clamp(number, startValue, endValue);

    return startValue <= n && n < endValue;
  },
  // Splits string into an array of its words.
  words(str = '', pattern = undefined) {

    if (pattern === undefined) {

      return str.split(' ');
    } else {

      return str.split(pattern);
    }
  },
  // Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
  //[string=''] (string): The string to pad.
  //[length=0] (number): The padding length.
  //[chars=' '] (string): The string used as padding.
  pad(str = '', len = 0, chars = ' ') {

    if (str.length >= len) {

      return str;
    }
    
    let startPaddingLength = Math.floor((len - str.length) / 2);

    let beg = chars.repeat(startPaddingLength)
    
    let endPaddingLength = len - str.length - startPaddingLength;

    let end = chars.repeat(endPaddingLength);
    
    let paddedString = beg + str + end;
    
    return paddedString; 
  },
  // Checks if path is a direct property of object.
  has(object, key) {
  	let hasValue = object[key];

  	if (hasValue !== undefined) {

      return true;
    } else {

      return false;
    }
  },
  // Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
  invert(obj) {

  	const invertedObj = {};

  	for (var key in obj) {

  		value = obj[key];

  		invertedObj[value] = key;
  	}

  	return invertedObj;
  },
  // This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.
  findKey(obj, predicate) {

  	for (var key in obj) {

  		if (predicate(obj[key])) {

  			return key;
  		}
  	}

  	return undefined;
  },
  // Creates a slice of array with n elements dropped from the beginning.
  drop(arr, num = 1) {
  	
  	droppedArr = [];

  	if (num <= arr.length) {
  		
  		droppedArr = arr.slice(num);
  		
  		return droppedArr;
  	}

  	return droppedArr;
  },
  // Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
  dropWhile(arr, predicate) {

    var i = 0;

    while (i < arr.length) {

    	if (!(predicate(arr[i], i, arr))) {

    		return this.drop(arr, i);
    	}

    	i += 1;
    }
  },
  // Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
  chunk(arr, num = 1) {
    
    let newArr = [];
    
    let rows = Math.round(arr.length / num);
    
    for (let i = 0, k = 0; i < rows; i++) {

    	let tempArr = [];

    	for (let j = 0; j < num; j++, k++) {

    		if (arr[k] === undefined) {

    			i = rows;

    			break;
    		}
    		tempArr[j] = arr[k];
    	}

    	newArr.push(tempArr);
    }

    return newArr;
  }
};

/* 
Test all
$ node test/lodash.js

Test by methods
$ node test/clamp.js
$ node test/in-range.js
$ node test/pad.js
$ node test/has.js
$ node test/invert.js
$ node test/find-key.js
$ node test/drop.js
$ node test/drop-while.js
$ node test/drop-while.js
$ node test/chunk.js
*/

// Do not write or modify code below this line.
module.exports = _;