/*
1.
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number,
representing the person's age, and returns the boolean true if they are 18 years old or older,
and the boolean false if they are not.
*/
const canIVote = age => age >= 18 ? true : false; 

/*
2.
Write a function, agreeOrDisagree(),
that takes in two strings, and returns 'You agree!'
if the two strings are the same and 'You disagree!'
if the two strings are different.
*/
const agreeOrDisagree = (x, y) => x === y ? 'You agree!' : 'You disagree!';

/*
3.
Write a function, lifePhase(), that takes in a person's age,
as a number, and returns which phase of life they are in. 
Here are the classifications:
*	0-3 should return 'baby'
*	4-12 should return 'child'
*	13-19 should return 'teen'
*	20-64 should return 'adult' 
*	65-140 should return 'senior citizen'
*	If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
*/
function lifePhase(age) {
  if (age > 140 || age < 0) {
    return "This is not a valid age";
  } else if (age >= 65) {
    return "senior citizen";
  } else if (age >= 20) {
    return "adult";
  } else if (age >= 13) {
    return "teen"
  } else if (age >= 4) {
    return "child";
  } else {
    return "baby";
  }
}

/*
4.
Write a function, finalGrade(). It should:
*	Take three arguments of type number
*	Find the average of those three numbers
*	Return the letter grade (as a string) that the average corresponds to
*	Return 'You have entered an invalid grade.' if any of the three grades are less than 0 or greater than 100
*	0-59 should return: 'F'
*	60-69 should return: 'D'
*	70-79 should return: 'C'
*	80-89 should return: 'B'
*	90-100 should return: 'A'
*/
function finalGrade(x, y, z) {
  let average = (x + y + z) / 3;
  if ((100 < average || average < 0) ||
  	(100 < x || x < 0) ||
  	(100 < y || y < 0) ||
  	(100 < z || z < 0)) {
    return 'You have entered an invalid grade.'
  }	else if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
  	return 'C';
 	} else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

/*
5.
Write a function, reportingForDuty(),
that has two string parameters, rank and lastName,
and returns a string in the following format: 'rank lastName reporting for duty!'
*/
function reportingForDuty(rank, lastName) {
  return `${rank} ${lastName} reporting for duty!`;
}

/*
6.
We wrote a function, rollTheDice(),
which is supposed to simulate two dice being rolled and totalled.
It's close to doing what we want, but there's something not quite right.
Can you fix our code, please? 
*/
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.random(1) * 7;
    let die2 = Math.random(1) * 7;
    return Math.floor(die1 + die2);
}
console.log(rollTheDice());

/*
7.
Write a function, calculateWeight(). It should:
*	Have two parameters: earthWeight and planet
*	Expect earthWeight to be a number 
*	Expect planet to be a string
*	Return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
*	'Mercury' weight = earthWeight * 0.378
*	'Venus' weight = earthWeight * 0.907
*	'Mars' weight = earthWeight * 0.377
*	'Jupiter' weight = earthWeight * 2.36
*	'Saturn' weight = earthWeight * 0.916
*	For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
*/
function calculateWeight(earthWeight = 0, planet='') {
  if (planet === 'Mercury') {
    return earthWeight * 0.378;
  } else if (planet === 'Venus') {
    return earthWeight * 0.907;
  } else if (planet === 'Mars') {
    return earthWeight * 0.377;
  } else if (planet === 'Jupiter') {
    return earthWeight * 2.36;
  } else if (planet === 'Saturn') {
    return earthWeight * 0.916;
  } else {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
}

/*
8.
It can be hard to keep track of what's truthy or falsy in JavaScript (https://developer.mozilla.org/en-US/docs/Glossary/Falsy).
Write a function, truthyOrFalsy(), that takes in any value and returns 
true if that value is truthy and false if that value is falsy.
*/
function truthyOrFalsy(x) {
  if (x) {

    return true;

  } else {

    return false;
  }
}

/*
9.
A person's number of imaginary friends are always 33% of their total friends.
Write a function, numImaginaryFriends(), that takes in the total number of friends a
person has and returns the number of imaginary friends they have. 
Since friends can only come in whole numbers, be sure to round your result before returning it.
The JavaScript Math.round() function will come in handy.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
*/
function numImaginaryFriends(totalFriends) {
  return Math.round(0.33 * totalFriends);
}

/*
10.
Write a function, sillySentence(),
that has 3 string parameters and returns the following silly sentence with
the blanks filled in by the arguments passed into the function:
*/
const sillySentence = (adjective, verb, noun) => {
  return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
};

/*
11.
Write a function, howOld(), that has two number parameters, age and year,
and returns how old someone who is currently that age was (or will be) during that year.
Handle three different cases:
*	If the year is in the future, you should return a string in the following format:
	'You will be [calculated age] in the year [year passed in]'
*	If the year is before they were born, you should return a string in the following format:
	'The year [year passed in] was [calculated number of years] years before you were born'
*	If the year is in the past but not before the the person was born, you should return a string in the following format:
	'You were [calculated age] in the year [year passed in]'
*/
function howOld(age, year) {
  let yearBorn, currentYear;
  // Assumption made
  currentYear = 2018;
  yearBorn = 2018 - age;
  
  if (year > 2018) {
    
    let futureAge = age + (year - 2018);
    
    return `You will be ${futureAge} in the year ${year}`;
    
  } else if (yearBorn < year && year < 2018) {
    
    let previousAge = age - (2018 - year);
    
    return "You were " + previousAge + " in the year " + year;
    
  } else {
    // Implied remaining case, the year passed < yearBorn
    // yearBorn > year
    let beforeBorn = yearBorn - year;
    return `The year ${year} was ${beforeBorn} years before you were born`;
  }
}

/*
12.
We wrote a function, whatRelation(), that has one number parameter, percentSharedDNA, and returns the likely relationship. We expect the number passed in to always be an integer from 0 to 100, but for some reason it's not working!
Here's how it's supposed to calculate the relationship:
*	100 should return 'You are likely identical twins.'
*	35-99 should return 'You are likely parent and child or full siblings.'
*	14-34 should return 'You are likely grandparent and grandchild, aunt/uncle and neice/nephew, or half siblings.'
*	6-13 should return 'You are likely 1st cousins.'
*	3-5 should return 'You are likely 2nd cousins.'
*	1-2 should return 'You are likely 3rd cousins.'
*	0 should return 'You are likely not related.'
Unfortunately, it's not working how we want!
*/
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA >= 35) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA >= 14) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA >= 6) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA >= 3) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA >= 1) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

/*
13.
Create a function, tipCalculator(), that has two parameters,
a string representing the quality of the service received and a number representing the total cost.
Return the tip, as a number, based on the following:
*	'bad' should return a 5% tip
*	'ok' should return a 15% tip
*	'good' should return a 20% tip 
*	'excellent' should return a 30% tip
*	all other inputs should default to 18%
*/
function tipCalculator(quality, total) {

  const qlty = quality.toLowerCase();
  switch(qlty) {
    case 'bad':
      return total * 0.05;
    case 'ok':
      return total * 0.15;
    case 'good':
      return total * 0.20;
    case 'excellent':
      return total * 0.30;
    default:
      return total * 0.18;
         }
}

/*
14.
Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string.
Use a switch/case, and cover these cases:
*	'shrug' should return '|_{"}_|'
*	'smiley face' should return ':)'
*	'frowny face' should return':('
*	'winky face' should return ';)'
*	'heart' should return '<3'
*	any other input should return '|_(* ~ *)_|'
*/
function toEmoticon(str) {
  switch(str.toLowerCase()) {
    case 'shrug':
      return '|_{"}_|';
    case 'smiley face':
      return ':)';
    case 'frowny face':
      return ':(';
    case 'winky face':
      return ';)';
    case 'heart':
      return '<3';
    default:
      return '|_(* ~ *)_|';
  }
}
