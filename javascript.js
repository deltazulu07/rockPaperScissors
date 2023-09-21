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
    //play 1 round of rock paper scissors and return string declaring result

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) 
        {
            return ("You win! " + playerSelection + " beats " + computerSelection);
        }
    else if (playerSelection === computerSelection) {
        return ("You tied. Try again.");
    }
    else {
        return ("You lost, " + computerSelection + " beats " + playerSelection);
    }
}

function getUserInput() {
    // get user input and error handing for invalid user inputs
    let playerSelection; 
    let playerSelectionLowerCase;  
    let inputIsValid = false;

    while (!inputIsValid) {
        playerSelection = prompt("One, two, three, shoot!");
        playerSelectionLowerCase = playerSelection.toLowerCase();
        inputIsValid = ((playerSelectionLowerCase === "rock") || 
                        (playerSelectionLowerCase === "paper") ||
                        (playerSelectionLowerCase === "scissors"));
        if (!inputIsValid) {
            console.log("Only enter rock, paper, scissors. Try again.");
        }
    }
    return playerSelectionLowerCase;
}

function playFiveRounds() {
    // play 5 rounds of rock, paper, scissors
    let numOfWin = 0, numOfTie = 0, numOfLoss = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = getUserInput();
        let computerChoice = getComputerChoice();
        let gameOutcome = playOneRound(playerChoice, computerChoice);

        console.log("You played " + playerChoice + ", computer played " + computerChoice);
        console.log(gameOutcome);
        
        if (gameOutcome.includes("win")) {
            numOfWin += 1;
        }
        else if (gameOutcome.includes("tie")) {
            numOfTie += 1;
        }
        else {
            numOfLoss += 1;
        }
    }

    console.log("You won " + numOfWin + " times, you lost " + numOfLoss + " times, and you tied " + numOfTie + " times.");
}

playFiveRounds();