let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if(number === 0) return("rock");
    else if(number === 1) return("paper");
    else return("scissor");
}

//console.log(getComputerChoice())

function getHumanChoice(){
    let sign = prompt("Choose rock, paper or scissor?");
    return sign
}

//console.log(getHumanChoice())

function playRound( ComputerChoice, HumanChoice ){

    if (ComputerChoice === HumanChoice.toLowerCase()){
        console.log("Draw! Play again");
    }
    else if (ComputerChoice == "rock" && HumanChoice.toLowerCase() == "paper" ){
        humanScore = humanScore + 1;
        console.log("You won! Paper beats Rock")
    }
    else if (ComputerChoice == "rock" && HumanChoice.toLowerCase() == "scissor" ){
        computerScore = computerScore + 1;
        console.log("You lose! Rock beats Scissor")
    }
    else if (ComputerChoice == "paper" && HumanChoice.toLowerCase() == "rock" ){
        computerScore = computerScore + 1;
        console.log("You lost! Paper beats Rock")
    }
    else if (ComputerChoice == "paper" && HumanChoice.toLowerCase() == "scissor" ){
        humanScore = humanScore + 1;
        console.log("You won! Scissor beats Paper")
    }
    else if (ComputerChoice == "scissor" && HumanChoice.toLowerCase() == "paper" ){
        computerScore = computerScore + 1;
        console.log("You lost! Scissor beats Paper")
    }
    else if (ComputerChoice == "scissor" && HumanChoice.toLowerCase() == "rock" ){
        humanScore = humanScore + 1;
        console.log("You won! Rock beats Scissor")
    }
    else {
        console.log("Invalid input")
    }


}





function playGame(){
    for(i=0; i<5; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
    }

    if(computerScore > humanScore){
        console.log("Computer won")
    }
    else { console.log("Human won")
    }

    console.log(humanScore)
}

playGame()