function getComputerChoice() {
    // randomly return "Rock", "Paper", or "Scissors"

    //generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();

    //if decimal [0, 1/3) "Rock", [1/3, 2/3) "Paper", [2/3, 1) "Scissors"
    switch (true) {
        case  (randomDecimal >=0 && randomDecimal < 1/3):
            return "Rock";
        case  (randomDecimal >= 1/3 && randomDecimal < 2/3):
            return "Paper";
        default:
            return "Scissors";
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

    //convert player and computer selections to lower case
    let playerLowerCase = playerSelection.toLowerCase();
    let computerLowerCase = computerSelection.toLowerCase();

    //3 permutations for player, win, lose, tie
    if ((playerLowerCase === "rock" && computerLowerCase === "scissors") ||
        (playerLowerCase === "paper" && computerLowerCase === "rock") ||
        (playerLowerCase === "scissors" && computerLowerCase === "paper")) 
        {
            return ("You win! " + playerSelection + " beats " + computerSelection);
        }
    else if (playerLowerCase === computerLowerCase) {
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
    let validInput = false;

    while (!validInput) {
        console.log("Only enter rock, paper, scissors. Try again.");
        playerSelection = prompt("One, two, three, shoot!");
        let playerLC = playerSelection.toLowerCase();
        validInput = (  (playerLC === "rock") || 
                            (playerLC === "paper") ||
                            (playerLC === "scissors"));
    }
    return playerSelection;
}

function game() {
    // play 5 rounds of rock, paper, scissors
    // print result after each round; print final winner
    let numOfWin = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(userInput(), getComputerChoice());
        console.log(result);
        if (result.includes("win")) {
            numOfWin += 1;
        }
    }
    if (numOfWin >= 3) {
        console.log("You won the majority of the games! Congrats!");
    }
}