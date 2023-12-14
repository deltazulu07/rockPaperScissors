function getComputerChoice() {
    // randomly return "rock", "paper", or "scissors" to get computer's hand

    const randomDecimal = Math.random();
    switch (true) {
        case  (randomDecimal >=0 && randomDecimal < 1/3):
            return "rock";
        case  (randomDecimal >= 1/3 && randomDecimal < 2/3):
            return "paper";
        default:
            return "scissors";
    }
}

function testGetComputerChoice(numOfLoops) {
    //test the getComputerChoice() function is truly random

    let paperCount = 0, rockCount = 0, scissorsCount = 0;
    
    for (let i = 0; i < numOfLoops; i++) {
        switch (getComputerChoice()) {
            case "Rock":
                rockCount += 1;
                break;
            case "Paper":
                paperCount += 1;
                break;
            default:
                scissorsCount += 1;
        }
    }
    console.log("Paper % of time: " + paperCount / numOfLoops);
    console.log("Rock % of time: " + rockCount / numOfLoops);
    console.log("Scissors % of time: " + scissorsCount /numOfLoops);
}

function playOneRound(playerSelection, computerSelection) {
    //play 1 round and return an array of player and computer score; winner gets 1 point
    console.log('Player: ' + playerSelection + '; Computer: ' + computerSelection);

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) 
        {
            return [1, 0];
        }
    else if (playerSelection === computerSelection) {
        return [0, 0];
    }
    else {
        return [0, 1];
    }
}

const playerButtons = document.querySelectorAll('.playerHand');
const divEle = document.querySelector('div');
let playerTally = 0;
let computerTally = 0;
let oneGameScoreArray = [0, 0];

function message(playerTally, computerTally) {
    if (playerTally === 5) {
        alert('Player wins 5-' + computerTally + '. Play again.');
        resetGame();
    }
    else if (computerTally === 5) {
        alert('Computer wins 5-' + playerTally + '. Play again.');
        resetGame();
    }
    else {
        divEle.textContent = 'Player Score: ' + playerTally + '. Computer Score: ' + computerTally;
    }
}

function resetGame() {
    playerTally = 0,
    computerTally = 0;
    divEle.textContent = '';
}

playerButtons.forEach(function(button) {
    const playerChoice = button.textContent.toLowerCase(); //text of each button

    button.addEventListener('click', function() {
        oneGameScoreArray = playOneRound(playerChoice, getComputerChoice());
        playerTally += oneGameScoreArray[0];
        computerTally += oneGameScoreArray[1];
        message(playerTally, computerTally);
    });
});