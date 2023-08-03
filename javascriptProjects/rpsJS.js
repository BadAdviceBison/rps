function getComputerChoice(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}

// getComputerChoice(1, 3)
console.log(getComputerChoice(1,4))