// The Magic 8-Ball is a toy used for fortune-telling or seeking advice.
// The user asks a question to the large plastic ball, then turns it over to reveal a written answer which appears on the surface of the toy. 
// The user will be able to input a question, then our program will output a random fortune.
let userName = 'Patrick';

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!'); 

let userQuestion = 'What day is it today?';

userQuestion ? console.log(`You asked, \'${userQuestion}\'`) : console.log("You did not ask a question.");

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
	case (randomNumber = 0):
		console.log('It is certain');
		break;
	case (randomNumber = 1):
		console.log('It is decidedly so');
		break;
	case (randomNumber = 2):
		console.log('Reply hazy try again');
		break;
	case (randomNumber = 3):
		console.log('Cannot predict now');
		break;
	case (randomNumber = 4):
		console.log('Do not count on it');
		break;
	case (randomNumber = 5):
		console.log('My sources say no');
		break;
	case (randomNumber = 6):
		console.log('Outlook not so good');
		break;
	case (randomNumber = 7):
		console.log('Signs point to yes');
		break;
	default:
		console.log('I do not have an answer');
		break;
}