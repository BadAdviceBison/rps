let playerScore = 0;
let botScore = 0;
let playerSelection = 0;

updateCounter()

//Make button background blue on click for player select, red for bot reveal, purple for bot reveal tie, maybe add small delays for effect.

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }

let botPick = 0

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    playerSelection = 1
    botPick = getComputerChoice(1,4)
    compare(playerSelection, botPick)
    scoreCheck()
    })

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    playerSelection = 2
    botPick = getComputerChoice(1,4)
    compare(playerSelection, botPick)
    scoreCheck()
})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    playerSelection = 3
    botPick = getComputerChoice(1,4)
    compare(playerSelection, botPick)
    scoreCheck()
})

const buttons = document.querySelectorAll('.rpsButton')
buttons.forEach(button => button.addEventListener('click', updateCounter))

function updateCounter() {
    document.getElementById('counterPlayer').innerText = `Player: ${playerScore}`
    document.getElementById('counterBot').innerText = `Bot: ${botScore}`
}

function scoreCheck() {
    if (playerScore === 1) {
        document.getElementById('status').innerText = 'Congratulations! \n\n You\'ve saved yourself from the clutches of a TechnoTyrant!'
        addRestartButton()
    } else if (botScore === 1) {
        document.getElementById('status').innerText = 'Oh no! You\'ve been condemned to a life of servitude! Unless...'
        addRestartButton()
    }
}

const restartButton = document.createElement('button')

function addRestartButton() {
    restartButton.classList.add('restartButton')
    if (playerScore === 1) {
    restartButton.innerText = 'Dunk on the TechnoDork again?'
    } else if (botScore === 1) {
    restartButton.innerText = 'Salvation..?'
    }
    const statusBox = document.getElementById('statusBox')
    statusBox.appendChild(restartButton)
    restartButton.addEventListener('click', startOver)
}



function startOver() {
    playerScore = 0
    botScore = 0
    document.getElementById('status').innerText = 'Defeat your robotic overlord \n and earn your freedom!'
    statusBox.removeChild(restartButton)
    updateCounter()
}

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
        playerScore += 1
    } 
    else if (player == 3 && bot == 1) {
        alert('The bot chose rock. You lose :(')
        botScore += 1
    }
    else if (player == 1 && bot == 2) {
        alert('The bot chose paper. You lose :(')
        botScore += 1
    }
    else if (player == 2 && bot == 2) {
        alert('The bot also chose paper. It\'s a draw!')
    }
    else if (player == 3 && bot == 2) {
        alert('The bot chose paper. You win! :D')
        playerScore += 1
    }
    else if (player == 1 && bot == 3) {
        alert('The bot chose scissors. You win!')
        playerScore += 1
    }
    else if (player == 2 && bot == 3) {
        alert('The bot chose scissors. You lose :(')
        botScore += 1
    }
    else if (player == 3 && bot == 3) {
        alert('The bot also chose scissors. It\'s a draw!')
    }
}