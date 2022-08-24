// computer guess function 
const choices = ['rock', 'paper', 'scissors'];
function compGuess() {
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(compGuess());

// play round 
function playRound(playerSelection, compSelection) {
    if (playerSelection === compSelection) {
        return "it's a tie!";
    } else if (playerSelection === 'rock' && compSelection === 'scissors') {
        return "human wins!";
    } else if (playerSelection === 'paper' && compSelection === 'rock') {
        return "player wins";
    } else if (playerSelection === 'scissors' && compSelection === 'paper') {
        return "scissors beats rock! player wins";
    } else if (playerSelection === 'rock' && compSelection === 'paper') {
        return "paper beats rock, player loses";
    } else if (playerSelection === 'paper' && compSelection === 'scissors') {
        return "computer wins";
    } else if (playerSelection === 'scissors' && compSelection === 'rock') {
        return "computer wins";
    }
 }

 // user input function