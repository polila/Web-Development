/*
Here's how our registration works.
There are adult runners (over 18 years of age) and youth runners (under 18 years of age).
They can register early or late.
Runners are assigned a race number and start time based on their age and registration.

Race number:
*	Early adults receive a race number at or above 1000.
*	All others receive a number below 1000.
Start time:
*	Adult registrants run at 9:30 am or 11:00 am.
		Early adults run at 9:30 am.
		Late adults run at 11:00 am.
*	Youth registrants run at 12:30 pm (regardless of registration).
But we didn't plan for runners that are exactly 18!
We'll handle that by the end of the project.
*/
let raceNumber = Math.floor(Math.random() * 2000);

let isEarly;

if (raceNumber >= 1000) {
	isEarly = true;
} else {
	isEarly = false;
}

let age = Math.floor(Math.random() * 75 + 5);

let isAdult;

if (age > 18) {
  isAdult = true;
} else {
  isAdult = false;
}

if (isEarly && isAdult) {
	raceNumber += 1000;
}

if (isAdult) {
	if (isEarly) {
		console.log('Time: 9:30AM');
    console.log('Division: Adult');
    console.log(`Age: ${age}`);
    console.log(`Race number: ${raceNumber}`);
	} else {
    console.log('Time: 11:00AM');
    console.log('Division: Adult');
    console.log(`Age: ${age}`);
    console.log(`Race number: ${raceNumber}`);
	}
}	else if (age < 18) {
  	console.log('Time: 12:30AM');
    console.log('Division: Youth');
    console.log(`Age: ${age}`);
    console.log(`Race number: ${raceNumber}`);
}	else {
  console.log(`Age: ${age}`);
  console.log('Not eligible.');
}