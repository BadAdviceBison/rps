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
let playerScore = 0;
let botScore = 0;
let playerSelection = 0;

//Make button background blue on click for player select, red for bot reveal, purple for bot reveal tie, maybe add small delays for effect.

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => playerSelection = 1);

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => playerSelection = 2);

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => playerSelection = 3);

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }

let botPick = getComputerChoice(1,4)

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

/* 
Rock = 1
Paper = 2
Scissors = 3
*/

function compare(player, bot) {
    if      (player == 1 && bot == 1) {
        alert('The bot also chose rock. It\'s a draw!')
    } 
    else if (player == 2 && bot == 1) {
        alert('The bot chose rock. You win! :D')
    } 
    else if (player == 3 && bot == 1) {
        alert('The bot chose rock. You lose :(')
    }
    else if (player == 1 && bot == 2) {
        alert('The bot chose paper. You lose :(')
    }
    else if (player == 2 && bot == 2) {
        alert('The bot also chose paper. It\'s a draw!')
    }
    else if (player == 3 && bot == 2) {
        alert('The bot chose paper. You win! :D')
    }
    else if (player == 1 && bot == 3) {
        alert('The bot chose scissors. You win!')
    }
    else if (player == 2 && bot == 3) {
        alert('The bot chose scissors. You lose :(')
    }
    else if (player == 3 && bot == 3) {
        alert('The bot also chose scissors. It\'s a draw!')
    }
}

compare(playerSelection, botPick)

//Gives buttons event listeners