/*
Steps:
Get bot choice
get human choice
compare choices
announce winner

/* 
Rock = 1
Paper = 2
Scissors = 3
*/

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }

let botPick = getComputerChoice(1,4)

// alert('Welcome to Rock Paper Scissors')

let playerSelection = prompt('Welcome to Rock Paper Scissors!\n\nType "r", "p", or "s" to make your choice.');

//Convert playerSelection to lowercase, and convert the respective characters to the appropriate number for comparison.

function pLower(newVal) {
    playerSelection = newVal.toLowerCase()
}

pLower(playerSelection)

function pConvert(newVal2) {
    if (newVal2 == 'r') {
        playerSelection = 1
    } else if (newVal2 == 'p') {
        playerSelection = 2
    } else if (newVal2 == 's') {
        playerSelection = 3
    } else {
        playerSelection = 100
    }
}

pConvert(playerSelection)

function confirmSelection() { 
    if (playerSelection == 1) {
        alert('You picked rock.');
    } 
    else if (playerSelection == 2) {
        alert('You picked paper.');
    } 
    else if (playerSelection == 3) {
        alert('You picked scissors.');
    } 
    else {
        alert('That\'s not a valid selection');
    }
}

confirmSelection()

