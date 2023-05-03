
function getComputerChoice() {
    // Define an array of possible choices
    const choices = ["rock", "paper", "scissors"];
    // Get a random index between 0 and the length of the array
    const index = Math.floor(Math.random() * choices.length);
    // Return the element at that index
    return choices[index];
}

// Test the function by calling it and logging the result
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "draw, go again!"
    } else if (playerSelection.toLowerCase()== "rock" && computerSelection.toLowerCase()=="paper") {
        return "You lose! Paper beats Rock"
    } else if (playerSelection.toLowerCase()== "paper" && computerSelection.toLowerCase()=="scissors") {
        return "You lose! scissors beats paper"
    } else if (playerSelection.toLowerCase()== "scissors" && computerSelection.toLowerCase()=="rock") {
        return "You lose! rock beats scissors"
    } else if (playerSelection.toLowerCase()== "paper" && computerSelection.toLowerCase()=="rock") {
        return "You win! paper beats rock"
    } else if (playerSelection.toLowerCase()== "scissors" && computerSelection.toLowerCase()=="paper") {
        return "You win! scissors beats paper"
    } else if (playerSelection.toLowerCase()== "rock" && computerSelection.toLowerCase()=="scissors") {
        return "You win! rock beats scissors"
    } else {
        return "Only enter rock, papers or scissors"
    }
}

// let playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game() {
    // Define a variable to store the number of rounds
    var rounds = 5;
    
    // Define a for loop that iterates from 1 to rounds
    for (let i = 0; i < 5; i++) {
      playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
      computerSelection = getComputerChoice()
      // Call the playGame function and store the result in a variable
      let result = playRound(playerSelection, computerSelection);
      // Log the result with the round number
      console.log("Round " + i + ": " + result);
    }
}

// let compChoice = {Value: ""};
//     let compChoiceInt;
//     let playerChoiceInt;
//     let playerChoice;

//     for (let i = 0; i < 5; i++){
//         playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
//         if (playerChoice == "rock"){
//             playerChoiceInt = 0;
//         }
//         else if (playerChoice == "paper"){
//             playerChoiceInt = 1;
//         }
//         else if (playerChoice == "scissors")
//         {
//             playerChoiceInt = 2;
//         }
//         compChoiceInt = computerPlay(compChoice);
//         playRound(playerChoiceInt, compChoiceInt, compChoice, playerChoice);
//     }
game();