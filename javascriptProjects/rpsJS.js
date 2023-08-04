/*
Steps:
Get bot choice
get human choice
<< Something like : if (playerSelection === 1) {
    alert('You picked rock.');
} elif {
    (playerSelection === 2)
    alert('You picked paper.');
} elif {
    (playerSelection === 3);
    alert('You picked paper.')
} Else {
    alert('That's not a valid selection')
}
}
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

let botPick = (getComputerChoice(1,4))

let playerSelection = prompt('Type "r", "p", or "s" to make your choice!');

//Convert playerSelection to lowercase, and convert the respective characters to the appropriate number for comparison.
let playerSelection = playerSelection.toLowerCase()

let playerSelection = (playerSelection =='r') ? 1 :
    (playerSelection == 'p') ? 2 :
    (playerSelection == 's') ? 3 :


function confirmSelection() 
    if (playerSelection === 1) {
        alert('You picked rock.');
    } 
    else if (playerSelection === 2) {
        alert('You picked paper.');
    } 
    else if (playerSelection === 3) {
        alert('You picked scissors.');
    } 
    else {
        alert('That\'s not a valid selection');
    }

confirmSelection