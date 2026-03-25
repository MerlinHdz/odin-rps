// Rock Paper Scissors //


// GAME RULES
const winsAgainst = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

const choices = Object.keys(winsAgainst);


// GAME STATE OBJECT
const gameState = {
    humanScore: 0,
    computerScore: 0,
    isGameOver: false
};


// DOM REFERENCES
const container = document.getElementById("game");

const title = document.createElement("h1");
title.textContent = "Rock Paper Scissors";
container.appendChild(title);

const buttonRow = document.createElement("div");
container.appendChild(buttonRow);

const scoreDiv = document.createElement("div");
scoreDiv.className = "score";
container.appendChild(scoreDiv);

const resultsDiv = document.createElement("div");
resultsDiv.className = "result";
container.appendChild(resultsDiv);

const winnerDiv = document.createElement("div");
winnerDiv.className = "winner";
container.appendChild(winnerDiv);


// CREATE BUTTONS
const buttons = []; // store button references for enabling/disabling

choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.toUpperCase();
    button.addEventListener("click", () => playRound(choice));
    buttonRow.appendChild(button);
    buttons.push(button);
});

// reset button (created once)
const resetButton = document.createElement("button");
resetButton.textContent = "Restart Game";
resetButton.className = "reset-btn";
resetButton.style.display = "none";
resetButton.addEventListener("click", resetGame);
container.appendChild(resetButton);


// GAME FUNCTIONS
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    // Prevent interaction after game ends
    if (gameState.isGameOver) return;

    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        resultsDiv.textContent = "Tie round";
        return;
    }

    if (winsAgainst[playerChoice] === computerChoice) {
        gameState.humanScore++;
        resultsDiv.textContent = `You win: ${playerChoice} beats ${computerChoice}`;
    } else {
        gameState.computerScore++;
        resultsDiv.textContent = `Computer wins: ${computerChoice} beats ${playerChoice}`;
    }

    updateScore();
    checkWinner();
}


// UI UPDATE FUNCTIONS
function updateScore() {
    scoreDiv.textContent = `Score: You ${gameState.humanScore} - ${gameState.computerScore} Computer`;
}


function checkWinner() {
    if (gameState.humanScore >= 5) {
        endGame("You won the match!");
    }

    if (gameState.computerScore >= 5) {
        endGame("Computer won the match!");
    }
}


function endGame(message) {
    gameState.isGameOver = true;
    winnerDiv.textContent = message;
    disableButtons();
    resetButton.style.display = 'inline-block';
}


// BUTTON CONTROl
function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}

function enableButtons() {
    buttons.forEach(button => button.disabled = false);
}



// RESET GAME
function resetGame() {
    gameState.humanScore = 0;
    gameState.computerScore = 0;    
    gameState.isGameOver = false;

    resultsDiv.textContent = '';
    winnerDiv.textContent = '';

    updateScore();
    enableButtons();

    resetButton.style.display = 'none';
}


// initialize score display:
updateScore();