function getComputerChoice() {
    // randomly return "Rock", "Paper", or "Scissors"

    //generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();

    //if decimal [0, 1/3) "Rock", [1/3, 2/3) "Paper", [2/3, 1) "Scissors"
    if (randomDecimal >=0 && randomDecimal < 1/3) {
        return "Rock";
    }
    else if (randomDecimal >= 1/3 && randomDecimal < 2/3) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function testGetComputerChoice(numOfLoops) {
    //test the function is truly random

    //run the function 100 times, and count the occurrence of the 3 possible outcomes
    let countPaper = 0, countRock = 0, countScissors = 0;
    for (let i = 0; i < numOfLoops; i++) {
        let result = getComputerChoice();
        if (result === "Rock") {
            countRock += 1;
        }
        else if (result === "Paper") {
            countPaper += 1;
        }
        else {
            countScissors += 1;
        }
    }
    console.log("Paper % of time: " + countPaper / numOfLoops);
    console.log("Rock % of time: " + countRock / numOfLoops);
    console.log("Scissors % of time: " + countScissors /numOfLoops);
}

testGetComputerChoice(1000);