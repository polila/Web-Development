/*
Did you know that giraffes sleep 4.6 hours a day? https://en.wikipedia.org/wiki/Giraffe#Legs,_locomotion_and_posture
We humans need more than that.
If we don't sleep enough, we accumulate sleep debt.
In this project we'll calculate if you're getting enough sleep each week using a sleep debt calculator.
The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

const getSleepHours = day => {
	switch (day.toLowerCase()) {
	case 'monday':
		return 5;
		break;
	case 'tuesday':
		return 12;
		break;
	case 'wednesday':
		return 8;
		break;
	case 'thursday':
		return 6;
		break;
	case 'friday':
		return 8;
		break;
	case 'saturday':
		return 7.5;
		break;
	case 'sunday':
		return 10.5;
		break;
	default:
		return 'invalid input';
		break;
	}
};

const getActualSleepHours = () => getSleepHours('monday') +  getSleepHours('tuesday') +  getSleepHours('wednesday') +  getSleepHours('thursday') +  getSleepHours('friday') +  getSleepHours('saturday') +  getSleepHours('sunday');

const getIdealSleepHours = () => {
	let idealHours = 8.5;
	return idealHours * 7;
};

const calculateSleepDebt = () => {

  let actualSleepHours = getActualSleepHours();

  let idealSleepHours = getIdealSleepHours();

  let distance = Math.abs(actualSleepHours - idealSleepHours);

  if (actualSleepHours === idealSleepHours) {

  	return "You got the perfect amount of sleep.";

  } else if (actualSleepHours > idealSleepHours) {

  	return "You got more sleep than needed by " + distance;

  } else {

  	return "You should get some rest, you are " + distance + " hours of sleep beheind.";

  }
};

console.log(calculateSleepDebt());