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



function playGame() {

    // create three buttons, one for each selection
    const rockButton = document.createElement("button");
    rockButton.textContent = "ROCK";
    document.body.appendChild(rockButton);
    rockButton.addEventListener("click", e => playRound(e.target.innerText.toLowerCase()))

    const paperButton = document.createElement("button");
    paperButton.textContent = "PAPER";
    document.body.appendChild(paperButton);
    paperButton.addEventListener("click", e => playRound(e.target.innerText.toLowerCase()))


    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "SCISSORS";
    document.body.appendChild(scissorsButton);
    scissorsButton.addEventListener("click", e => playRound(e.target.innerText.toLowerCase()))


    // add a div to display results
    const results = document.createElement("div");
    document.body.appendChild(results);

    


    function playRound(humanChoice) {
        let computerChoice = getComputerChoice();

        if (humanChoice == computerChoice) {
            // console.log("It's a tie!")
            results.textContent = "It's a tie";
            return;
        }

        const winsAgainst = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (winsAgainst[humanChoice] === computerChoice) {
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
    }


    let humanScore = 0;
    let computerScore = 0;    
}


playGame();