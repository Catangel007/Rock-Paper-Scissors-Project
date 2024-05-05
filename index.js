
let humanScore = 0;
let computerScore =0;
const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  

function getComputerChoice(){
let myArray = ["Rock","Paper","Scissors"];
let randomValue = myArray[Math.floor(math.random()*myArray.length)]
console.log(randomValue);
}
return getComputerChoice();



function getHumanChoice(input){
   let getHumanChoice= Window.prompt("Rock, Paper, Scissors, shoot!. ''");
    getHumanChoice= document.querySelector(input);
    console.log(getHumanChoice);
}

for (let i = 0; i < 5; i++) {
    function playRound(humanScore,computerScore){
   
    if((getComputerChoice === "Rock") && (getHumanChoice === "Scissors")){      
   console.log("You lose! Rock crushes Scissors");
    computerScore++;
    }
    
    else if ((getComputerChoice ==="Rock") && (getHumanChoice === "Paper")){
        console.log("Yeah, You win! Paper wraps rock.");
        humanScore++;
    }

    else if ((getComputerChoice ==="Rock") && (getHumanChoice === "Rock")){
        console.log("Hmmp... It's a Tie! try again.");
    }

    else if ((getComputerChoice === "Scissors") && (getHumanChoice === "Rock")){

        console.log("You Win! Rock crushes Scissors")
        humanScore++;
    }
    else if ((getComputerChoice === "Scissors") && (getHumanChoice === "Paper")){

        console.log("You lose! Scissors cuts Paper")
        computerScore++;
    }
    else if ((getComputerChoice === "Scissors") && (getHumanChoice === "Scissors")){

        console.log("Hmmp... It's a Tie! try again.")
    }
       
    else if ((getComputerChoice === "Paper") && (getHumanChoice === "Rock")){

         console.log("You Lose! Paper wraps rock!")
         computerScore++;
    }
    else if ((getComputerChoice === "Paper") && (getHumanChoice === "Scissors")){

        console.log("You win! Scissors cuts Paper.")
        humanScore++;
    }
     else if ((getComputerChoice === "Paper") && (getHumanChoice === "Paper")){

        console.log("Hmmp... It's a Tie! try again.")
       }

       else {
        console.log("You need to choose an option to play this game")
       }
}
}
  
  
  playRound(humanSelection, computerSelection);
  