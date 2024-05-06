
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
   
    if((computerSelection === "Rock") && (humanSelection === "Scissors")){      
   console.log("You lose! Rock crushes Scissors");
    computerScore++;
    }
    
    else if ((computerSelection ==="Rock") && (humanSelection === "Paper")){
        console.log("Yeah, You win! Paper wraps rock.");
        humanScore++;
    }

    else if ((computerSelection ==="Rock") && (humanSelection === "Rock")){
        console.log("Hmmm... It's a Tie! try again.");
    }

    else if ((computerSelection === "Scissors") && (humanSelection === "Rock")){

        console.log("You Win! Rock crushes Scissors")
        humanScore++;
    }
    else if ((computerSelection === "Scissors") && (humanSelection === "Paper")){

        console.log("You lose! Scissors cuts Paper")
        computerScore++;
    }
    else if ((computerSelection === "Scissors") && (humanSelection === "Scissors")){

        console.log("Hmmm... It's a Tie! try again.")
    }
       
    else if ((computerSelection === "Paper") && (humanSelection === "Rock")){

         console.log("You Lose! Paper wraps rock!")
         computerScore++;
    }
    else if ((computerSelection === "Paper") && (humanSelection === "Scissors")){

        console.log("You win! Scissors cuts Paper.")
        humanScore++;
    }
     else if ((computerSelection === "Paper") && (humanSelection === "Paper")){

        console.log("Hmmm... It's a Tie! try again.")
       }

       else {
        console.log("You need to choose an option to play this game")
       }
}
}
  
  
  playRound(humanSelection, computerSelection);

  let roundOne = humanScore , computerScore

  

  