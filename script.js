const computerChoiceDisplay = document.getElementById("computer-choice");
const humanChoiceDisplay = document.getElementById("human-choice");
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll("button");
let result

choices.forEach(choice => choice.addEventListener('click', (ev) => {
    humanChoice = ev.target.id
    humanChoiceDisplay.innerHTML = humanChoice
    genComputerChoice()
    getResult()
}))

function genComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length + 1)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === humanChoice) {
        result = "Draw!"
    }
    if (computerChoice === 'rock' && humanChoice === 'paper') {
        result = "You win!"
    }
    if (computerChoice === 'rock' && humanChoice === 'scissors') {
        result = "You lose :("
    }
    if (computerChoice === 'paper' && humanChoice === 'rock') {
        result = "Better luck next time"
    }
    if (computerChoice === 'paper' && humanChoice === 'scissors') {
        result = "Heck yea!"
    }
    if (computerChoice === 'scissors' && humanChoice === 'rock') {
        result = "You win :)"
    }
    if (computerChoice === 'scissors' && humanChoice === 'paper' ) {
        result = "You lose"
    }
    resultDisplay.innerHTML = result
}