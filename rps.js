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

function playGame() {

    // create three buttons, one for each selection
    const rockButton = document.createElement("button");
    rockButton.textContent = "ROCK";
    document.body.appendChild(rockButton);

    const paperButton = document.createElement("button");
    paperButton.textContent = "PAPER";
    document.body.appendChild(paperButton);


    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "SCISSORS";
    document.body.appendChild(scissorsButton);

    // add event listener to choice buttons
    [rockButton, paperButton, scissorsButton].forEach(button => {
        button.addEventListener("click", e => playRound(e.target.innerText.toLowerCase()));
    });


    // add a div to display results
    const results = document.createElement("div");
    document.body.appendChild(results);

    
    // display running score
    let humanScore = 0;
    let computerScore = 0; 
    let gameOver = false;

    const score = document.createElement("p");
    document.body.appendChild(score);

    const winner = document.createElement("p");
    document.body.appendChild(winner);


    function playRound(humanChoice) {
        // check if game is over
        if (gameOver) return;

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

        // update running score
        score.textContent = `Your Score: ${humanScore}  Computer: ${computerScore}`

        // if a player's score reaches 5, announce winner
        if (humanScore >= 5) {
            winner.textContent = "You win!";
            gameOver = true;
            disableButtons();
        } else if (computerScore >= 5) {
            winner.textContent = "You lose, the computer wins";
            gameOver = true;
            disableButtons();
        }
    }

    function disableButtons() {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}


playGame();