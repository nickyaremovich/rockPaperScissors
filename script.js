// variables 
const humanChoiceDisplay = document.getElementById('human-choice');
const compChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll('button');
let humanChoice;
let computerChoice;

choices.forEach(choice => choice.addEventListener('click', (e) => {
    humanChoice = e.target.id;
    humanChoiceDisplay.innerHTML = humanChoice;
    compChoice();
    getResult();
}))

function compChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        computerChoice = 'rock';
    } if (random === 1) {
        computerChoice = 'paper';
    } if (random === 2) {
        computerChoice = 'scissors';
    }
    compChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (humanChoice === computerChoice) {
    result = "Tie";
}   if (humanChoice === 'rock' && computerChoice === 'paper') {
    result = "You lose :("
}   if (humanChoice === 'rock' && computerChoice === "scissors") {
    result = 'You win!'
}   if (humanChoice === 'paper' && computerChoice === 'rock') {
    result = 'Human wins' 
}   if (humanChoice === 'paper' && computerChoice === 'scissors') {
    result = 'Computer wins'
}   if (humanChoice === 'scissors' && computerChoice === 'rock') {
    result = 'Computer wins'
}   if (humanChoice === 'scissors' && computerChoice === 'paper') {
    result = "human wins"
}
    resultDisplay.innerHTML = result
}



