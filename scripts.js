function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

// console.log(getComputerChoice());

// function play(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();

//     if (playerSelection == 'rock' && computerSelection == 'scissors') {
//         return "You win! Rock beats scissors"
//     }
// }