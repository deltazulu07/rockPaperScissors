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

function playOneRound(playerChoice, computerChoice) {
    //play 1 round and return an array of player and computer score; winner gets 1 point
    console.log('Player: ' + playerChoice + '; Computer: ' + computerChoice);

    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        return [1, 0];
    }
    else if (playerChoice === computerChoice) {
        return [0, 0];
    }
    else {
        return [0, 1];
    }
}

function playUntilFive() {
    function message() {
        if (playerScore === 5) {
            alert('Player wins 5-' + computerScore + '. Play again.');
            resetGame();
        }
        else if (computerScore === 5) {
            alert('Computer wins 5-' + playerScore + '. Play again.');
            resetGame();
        }
        else {
            divEle.textContent = 'Player Score: ' + playerScore + '. Computer Score: ' + computerScore;
        }
    }  
    
    function resetGame() {
        playerScore = 0,
        computerScore = 0;
        divEle.textContent = '';
    }
    const playerButtons = document.querySelectorAll('.playerHand');
    const divEle = document.querySelector('div');
    let playerScore = 0;
    let computerScore = 0;
    let oneGameScoreArray = [0, 0];

    playerButtons.forEach(function(button) {
        const playerChoice = button.textContent.toLowerCase(); //text of each button

        button.addEventListener('click', function() {
            oneGameScoreArray = playOneRound(playerChoice, getComputerChoice());
            playerScore += oneGameScoreArray[0];
            computerScore += oneGameScoreArray[1];
            message();
        });
    });
}

playUntilFive();