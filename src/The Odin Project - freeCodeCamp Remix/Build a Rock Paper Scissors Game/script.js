// Global variables
let humanScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get human's choice
function getHumanChoice() {
  let choice = prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
  while (!['rock', 'paper', 'scissors'].includes(choice)) {
    choice = prompt('Invalid choice. Please enter rock, paper, or scissors:').toLowerCase();
  }
  return choice;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

// Function to play the game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 3; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }

  if (humanScore > computerScore) {
    return 'You win the game!';
  } else if (computerScore > humanScore) {
    return 'You lose the game!';
  } else {
    return 'The game is a tie!';
  }
}
