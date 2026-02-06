// Rock Paper Scissors

// Create a Function getComputerChoice
// This function should
// randonmly return one of the following values:
// 'rock', 'paper', 'scissors'
// I will not use an array as it was not covered yet lol
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return humanChoice;
}



// should play 5 rounds and declare a winner
function playGame() {


    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a tie!")
            return;
        }

        const winsAgainst = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (winsAgainst[humanChoice] === computerChoice) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }


    let humanScore = 0;
    let computerScore = 0;

    

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore == computerScore) {
        console.log(`It's a tie! Your Score: ${humanScore}  vs ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log(`You win! Your Score: ${humanScore}  vs ${computerScore}`)
    }
     else {
        console.log(`The computer wins. ${computerScore} out of 5`);
    }
}


playGame();