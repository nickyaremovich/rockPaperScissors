// variables 
const humanChoiceDisplay = document.getElementById('human-choice');
const compChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll('button');
let humanChoice;

choices.forEach(choice => choice.addEventListener('click', (e) => {
    humanChoice = e.target.id;
    humanChoiceDisplay.innerHTML = humanChoice;
    compChoice();
}))



