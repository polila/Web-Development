/*
Rock paper scissors is a classic two player game.
Each player chooses either rock, paper, or scissors.
The items are compared, and whichever player chooses the more powerful item wins.
The possible outcomes are:
*	Rock destroys scissors.
*	Scissors cut paper.
*	Paper covers rock.
*	If there's a tie, then the game ends in a draw.
The game into four parts:
(1)	Get the user's choice.
(2)	Get the computer's choice.
(3)	Compare the two choices and determine a winner.
(4)	Start the program and display the results.
*/

const getUserChoice = userInput => {
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
		return userInput.toLowerCase();
	}
	return "Invalid input";
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const getComputerChoice = () => {
// [0,3)
  if (getRandomInt(0, 3) === 0) {
    return 'rock';
  } else if (getRandomInt(0, 3) === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};
// Permutation = P(3,2) = 3! / (3 - 2)! = 6, disregard tie scenarios
// (computer, user):= {(rock,paper), (rock,scissors),
//					(paper,rock), (paper,scissors),
//					(scissors,rock), (scissors,paper)}
function determineWinner(computer, user) {
	if (user === 'bomb') {
		return console.log('You cheated, you win.');
	} else if (computer === user) {
		return console.log("tie");
	} else if (computer === "rock") {
		if (user === "paper") {
			return  console.log(`You win, ${user} beats ${computer}`);
		} else {
			return console.log(`You loose, ${computer} beats ${user}`);
		}
	} else if (computer === "paper") {
		if (user === "scissors") {
			return  console.log(`You win, ${user} beats ${computer}`);
		} else {
			return console.log(`You loose, ${computer} beats ${user}`);
		}
	} else {
		if (user === "rock") {
			return  console.log(`You win, ${user} beats ${computer}`);
		}
		return console.log(`You loose, ${computer} beats ${user}`);
	}
}
// test
/*
let x = getUserChoice('paper');
let y = getComputerChoice();
console.log('User: ' + x);
console.log('Computer: ' + y);
determineWinner(y, x);
*/
let userChoice, computerChoice;
const playGame = () => {
  console.log("Game 1:")
  userChoice = getUserChoice('rock');
  computerChoice = getComputerChoice();
  console.log("User: " + userChoice);
  console.log("Computer: " + computerChoice);
  determineWinner(computerChoice, userChoice);
  console.log("Game 2:")
  userChoice = getUserChoice('paper');
  computerChoice = getComputerChoice();
  console.log("User: " + userChoice);
  console.log("Computer: " + computerChoice);
  determineWinner(computerChoice, userChoice);
  console.log("Game 3:")
  userChoice = getUserChoice('scissors');
  computerChoice = getComputerChoice();
  console.log("User: " + userChoice);
  console.log("Computer: " + computerChoice);
  determineWinner(computerChoice, userChoice);
  console.log("Game 4:")
  userChoice = getUserChoice('bomb');
  computerChoice = getComputerChoice();
  console.log("User: " + userChoice);
  console.log("Computer: " + computerChoice);
  determineWinner(computerChoice, userChoice);
}

playGame();