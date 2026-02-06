// Rock Paper Scissors

// Understand the problem.

// What do I need to make this work?

// Let the code make a random choice between rock, paper, scissors.
// Prompt the user to enter their choice

// determine if their choice beats the computer's or vice versa.

// display a message saying they won or lost.



// Create a Function getComputerChoice
// This function should
// randonmly return one of the following values:
// 'rock', 'paper', 'scissors'
// I will not use an array as it was not covered yet lol
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return 'rock';
    } else if (choice == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(getComputerChoice());