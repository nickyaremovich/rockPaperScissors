// variables 
const choices = ['rock', 'paper', 'scissors'];
let round = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const humanChoice = document.querySelector('p.humanChoice');
const compChoice = document.getElementsByClassName('.compChoice');

// comp choice functiom
function compGuess() {
    return choices[Math.floor(Math.random() * choices.length)];
}

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
function playGame() {
    playRound();
    round++;
}

 // user input function
rock.addEventListener('click', () => {
    humanChoice.innerHTML = 'Your Choice: You chose rock';
    playRound();
})

paper.addEventListener('click', () => {
    humanChoice.innerHTML = "Your Choice: You chose paper";
    playRound();
})

scissors.addEventListener('click', () => {
    humanChoice.innerHTML = "Your Choice: You chose scissors";
    playRound();
})
playGame();