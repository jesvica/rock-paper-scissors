//computer choice
function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

// let playerScore = 0;
// let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "u picked rock You win! Rock beats scissors";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "u picked rock You lose! Paper beats rock";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "u picked paper You win! Paper bears rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "u picked paper You lose! Scissors beats paper"
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "u picked scissors You lose! Rock beats scissors"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "u picked scissors You win! Scissors beats paper"
    } else if (playerSelection == computerSelection) {
        return "Draw!"
    } else {
        return "Error!"
    }
}
  
//   const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
// const playerSelection = 'rock'
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function playGame() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
}

playGame();