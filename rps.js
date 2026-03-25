// Rock Paper Scissors

// Create a Function getComputerChoice
// This function should
// randonmly return one of the following values:
// 'rock', 'paper', 'scissors'
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}


// create UI
let options = ['rock', 'paper', 'scissors'];
let buttons = [];

options.forEach(option =>  {
    const button = document.createElement("button");
    button.textContent = option.toUpperCase();

    button.addEventListener("click", () => playRound(option));

    document.body.appendChild(button);
    buttons.push(button);
});

const scoreDiv = document.createElement("div");
document.body.appendChild(scoreDiv);

const resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv);

const winnerDiv = document.createElement("div");
document.body.appendChild(winnerDiv);



// declare global vars
let isGameOver = false;
let humanScore = 0;
let computerScore = 0;



// takes as argument a human choice (a string representing the choice)
// makes computer choice, and plays round 
function playRound(choice) {
    if (isGameOver) return;

    let computerChoice = getComputerChoice();

    const winsAgainst = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (choice === computerChoice) {
        resultsDiv.textContent = "It's a tie";
        return;
    }

    if (winsAgainst[choice] === computerChoice) {
        resultsDiv.textContent = `You win! ${choice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultsDiv.textContent = `You lose! ${computerChoice} beats ${choice}`;
        computerScore++;
    }

    // update score display
    updateScoreDisplay();

    // check if someone has scored 5. If so, game is over.
    checkWinner();
    
}


function updateScoreDisplay() {
    scoreDiv.textContent = `Your score: ${humanScore} Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore >= 5) {
        winnerDiv.textContent = "You won!";
        isGameOver = true;
        disableButtons();
        showReset();
    } else if (computerScore >= 5) {
        winnerDiv.textContent = "You lost";
        isGameOver = true;
        disableButtons();
        showReset();
    }
}


function showReset() {
    resetButton = document.createElement("button");
    resetButton.textContent = "Restart";
    document.body.append(resetButton);

    resetButton.addEventListener("click", e => {
        reset();
        e.target.remove() // delete after click
    });
}

function reset() {
    isGameOver = false;
    humanScore = 0;
    computerScore = 0;

    resultsDiv.textContent = '';
    scoreDiv.textContent = '';
    winnerDiv.textContent = '';

    buttons.forEach(button => button.disabled = false);

}