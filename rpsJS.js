let playerScore = 0;
let botScore = 0;
let playerSelection = 0;
let botSelection = 0;


updateCounter()

//Make button background blue on click for player select, red for bot reveal, purple for bot reveal tie, maybe add small delays for effect.

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }

const rock = document.querySelector('#rock')

rock.addEventListener('click', () => {
    playerSelection = 1
    botSelection = getComputerChoice(1,4)
    compare(playerSelection, botSelection)
    scoreCheck()
    setTimeout(refreshButtons, '1000')
    })

const paper = document.querySelector('#paper')

paper.addEventListener('click', () => {
    playerSelection = 2
    botSelection = getComputerChoice(1,4)
    compare(playerSelection, botSelection)
    scoreCheck()
    setTimeout(refreshButtons, '1000')
})

const scissors = document.querySelector('#scissors')

scissors.addEventListener('click', () => {
    playerSelection = 3
    botSelection = getComputerChoice(1,4)
    compare(playerSelection, botSelection)
    scoreCheck()
    setTimeout(refreshButtons, '1000')
})

const buttons = document.querySelectorAll('.rpsButton')
buttons.forEach(button => button.addEventListener('click', updateCounter))

function refreshButtons() {
    buttons.forEach(button => button.classList.remove('playerSelect', 'botSelect', 'eachSelect'))
}

function updateCounter() {
    document.getElementById('counterPlayer').innerText = `Player: ${playerScore}`
    document.getElementById('counterBot').innerText = `Bot: ${botScore}`
}

function scoreCheck() {
    if (playerScore === 3) {
        document.getElementById('status').innerText = 'Congratulations! \n\n You\'ve saved yourself from the clutches of a TechnoTyrant!'
        addRestartButton()
    } else if (botScore === 3) {
        document.getElementById('status').innerText = 'Oh no! You\'ve been condemned to a life of servitude! Unless...'
        addRestartButton()
    }
}

const restartButton = document.createElement('button')

function addRestartButton() {
    restartButton.classList.add('restartButton')
    if (playerScore === 3) {
    restartButton.innerText = 'Dunk on the TechnoDork again?'
    } else if (botScore === 3) {
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
        rock.classList.add('eachSelect')
    } 
    else if (player == 2 && bot == 1) {
        paper.classList.add('playerSelect')
        rock.classList.add('botSelect')
        playerScore += 1
    } 
    else if (player == 3 && bot == 1) {
        scissors.classList.add('playerSelect')
        rock.classList.add('botSelect')
        botScore += 1
    }
    else if (player == 1 && bot == 2) {
        rock.classList.add('playerSelect')
        paper.classList.add('botSelect')
        botScore += 1
    }
    else if (player == 2 && bot == 2) {
        paper.classList.add('eachSelect')
    }
    else if (player == 3 && bot == 2) {
        scissors.classList.add('playerSelect')
        paper.classList.add('botSelect')
        playerScore += 1
    }
    else if (player == 1 && bot == 3) {
        rock.classList.add('playerSelect')
        scissors.classList.add('botSelect')
        playerScore += 1
    }
    else if (player == 2 && bot == 3) {
        paper.classList.add('playerSelect')
        scissors.classList.add('botSelect')
        botScore += 1
    }
    else if (player == 3 && bot == 3) {
        scissors.classList.add('eachSelect')
    }
}