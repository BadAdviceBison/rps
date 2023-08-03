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

Botpick = (getComputerChoice(1,4))

playerSelection = input()

