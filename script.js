let playerScore = 0;
let computerScore = 0;
const container = document.querySelector("#container");
const result = document.createElement("p");
const score = document.createElement("p");
const replayBtn = document.createElement("button");
game();

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let x = Math.floor(Math.random()*3);
    let choice = choices[x];
    return choice;
}

function game() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        let playerSelection = button.id;
        console.log("AI: " + computerSelection);
        console.log("Player: " + playerSelection);
        playRound(computerSelection, playerSelection);
    }));    
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            result.textContent = "It's a tie!";
        } else if (computerSelection === "scissors") {
            result.textContent = "You win! Rock beats scissors.";
            playerScore += 1;
        } else if (computerSelection === 'paper') {
            result.textContent = "You lose! Paper beats rock.";
            computerScore += 1;
        } else {
            alert("Whoops, something went wrong.");
            console.log("computerSelection failed");
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            result.textContent = "It's a tie!";
        } else if (computerSelection === "rock") {
            result.textContent = "You win! Paper beats rock.";
            playerScore += 1;
        } else if (computerSelection === 'scissors') {
            result.textContent = "You lose! Scissors beats paper.";
            computerScore += 1;
        } else {
            alert("Whoops, something went wrong.");
            console.log("computerSelection failed");
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            result.textContent = "It's a tie!";
        } else if (computerSelection === "paper") {
            result.textContent = "You win! Scissors beats paper.";
            playerScore += 1;
        } else if (computerSelection === 'rock') {
            result.textContent = "You lose! Rock beats scissors.";
            computerScore += 1;
        } else {
            alert("Whoops, something went wrong.");
            console.log("computerSelection failed");
        }
    } else {
        alert("That's not a valid option, pick rock, paper or scissors.");
    }

    score.textContent = `Your score: ${playerScore} AI score: ${computerScore}`;
    container.appendChild(score);
    container.appendChild(result);
    
    if (playerScore >= 5) {
        result.textContent = "VICTORY!!!";
        replayPrompt();
    } else if (computerScore >= 5) {
        result.textContent = "DEFEAT :("
        replayPrompt();
    }
}

function replayPrompt() {
    replayBtn.textContent = "Play again?";
    container.appendChild(replayBtn);
    replayBtn.addEventListener("click", reset)
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    score.textContent = "";
    result.textContent = "";
    replayBtn.remove();
    game();
}