function getComputerChoice(){
    let random = Math.random() 
    if(random < .33){
       return('rock')
    }else if(random < .66){
        return('paper')
    }else {
        return('scissors')
    }
    
}

function playRound(playerSelection, computerSelection){
    if((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 'YOU WIN!!!'
    }else if(playerSelection === computerSelection) {
        return 'It is a tie.'
    }else {
        return 'YOU LOSE.'
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));