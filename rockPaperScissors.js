
let playRock = document.querySelector("#rockBtn")
let playPaper = document.querySelector("#paperBtn")
let playScissors = document.querySelector("#scissorsBtn")
let results = document.querySelector("#results")
let playerScoreSpan = document.querySelector('.player-score')
let compScoreSpan = document.querySelector('.comp-score')
let playerScore = 0
let compScore = 0

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
    let roundResult = ""

    if((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++
        roundResult = `You win, ${playerSelection} beats ${computerSelection}!`
    }else if((playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        roundResult = 'It is a tie.'
    }else if((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection ==='rock')){
        compScore++
        roundResult = `You lose, ${playerSelection} loses to ${computerSelection}.`;
    }
    document.querySelector('#result').innerText = roundResult
}



function checkForWinner(playerScore, compScore){
    const h2 = document.createElement('h2')
    if(playerScore === 5){
        h2.classList.add('player-won')
        h2.innerText = "You won!" 
    }else if(compScore === 5){
        h2.classList.add('computer-won')
        h2.innerText = "You lost!"
    }
    result.append(h2)
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    compScoreSpan.innerText = `Computer Score: ${compScore}`
}

playRock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore);
})
playPaper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore);
})
playScissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore);
})


// const playerSelection = prompt('Choose rock, paper or scissors').toLowerCase()
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// function game(round) {   
//     for(let i = 0; i < round; i++){ 
//     const playerSelection = prompt('Choose rock, paper or scissors').toLowerCase()
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection))
//     } 
// }
// game(5)


