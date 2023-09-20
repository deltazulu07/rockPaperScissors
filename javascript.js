function getComputerChoice() {
    // randomly return "rock", "paper", or "scissors"

    //generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();

    //if decimal [0, 1/3) "Rock", [1/3, 2/3) "Paper", [2/3, 1) "Scissors"
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
    //test the function is truly random

    //run the function numOfLoops times, and count the % of all 3 outcomes
    let countPaper = 0, countRock = 0, countScissors = 0;
    
    for (let i = 0; i < numOfLoops; i++) {
        switch (getComputerChoice()) {
            case "Rock":
                countRock += 1;
                break;
            case "Paper":
                countPaper += 1;
                break;
            default:
                countScissors += 1;
        }
    }
    console.log("Paper % of time: " + countPaper / numOfLoops);
    console.log("Rock % of time: " + countRock / numOfLoops);
    console.log("Scissors % of time: " + countScissors /numOfLoops);
}

// testGetComputerChoice(10000);

function playRound(playerSelection, computerSelection) {
    //play 1 round of rock paper scissors and return string declaring result

    //3 permutations for player, win, lose, tie
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

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log("player: " + playerSelection);
// console.log("computer: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function userInput() {
    // get user input and error handing 
    let playerSelection; 
    let playerLC;  
    let validInput = false;

    while (!validInput) {
        playerSelection = prompt("One, two, three, shoot!");
        playerLC = playerSelection.toLowerCase();
        validInput = (  (playerLC === "rock") || 
                            (playerLC === "paper") ||
                            (playerLC === "scissors"));
        if (! validInput) {
            console.log("Only enter rock, paper, scissors. Try again.");
        }
    }
    return playerLC;
}

function game() {
    // play 5 rounds of rock, paper, scissors
    // print result after each round; print final winner
    let numOfWin = 0, numOfTie = 0, numOfLoss = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = userInput();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        console.log("You played " + playerChoice + ", computer played " + computerChoice);
        console.log(result);
        
        if (result.includes("win")) {
            numOfWin += 1;
        }
        else if (result.includes("tie")) {
            numOfTie += 1;
        }
        else {
            numOfLoss += 1;
        }
    }

    console.log("You won " + numOfWin + " times, you lost " + numOfLoss + " times, and you tied " + numOfTie + " times.");
}

game();