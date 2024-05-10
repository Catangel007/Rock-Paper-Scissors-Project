
let humanScore = 0;
let computerScore =0;
const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  let randomValue = myArray[Math.floor((Math.random()* myArray.length))];
  console.log(randomValue)
function getComputerChoice(){
let myArray = ["Rock","Paper","Scissors"];
 return myArray;
//if (randomValue == [0]) 
//{console.log("Rock")};
// if (randomValue == [1])
//{console.log("Paper")};
// if (randomValue == [2])
//{console.log("Scissors")};
//return (randomValue == getComputerChoice());
}

getComputerChoice();
console.log(myArray[1])


 

function getHumanChoice(input){
    console.log(window.prompt("Rock, Paper, Scissors, shoot!. ''"))
    getHumanChoice= document.querySelector(input);
    
    return (/input/i);
}
console.log(getHumanChoice());


for (let i = 0; i < 5; i++) {
    function playRound(humanScore,computerScore){
   
    if((computerScore === "Rock") && (humanScore=== "Scissors")){      
   console.log("You lose! Rock crushes Scissors");
    computerScore++;
    }
    
    else if ((computerScore ==="Rock") && (humanScore=== "Paper")){
        console.log("Yeah, You win! Paper wraps rock.");
        humanScore++;
    }

    else if ((computerScore ==="Rock") && (humanScore=== "Rock")){
        console.log("Hmmm... It's a Tie! try again.");
    }

    else if ((computerScore === "Scissors") && (humanScore=== "Rock")){

        console.log("You Win! Rock crushes Scissors")
        humanScore++;
    }
    else if ((computerScore === "Scissors") && (humanScore=== "Paper")){

        console.log("You lose! Scissors cuts Paper")
        computerScore++;
    }
    else if ((computerScore === "Scissors") && (humanScore=== "Scissors")){

        console.log("Hmmm... It's a Tie! try again.")
    }
       
    else if ((computerScore === "Paper") && (humanScore=== "Rock")){

         console.log("You Lose! Paper wraps rock!")
         computerScore++;
    }
    else if ((computerScore === "Paper") && (humanScore=== "Scissors")){

        console.log("You win! Scissors cuts Paper.")
        humanScore++;
    }
     else if ((computerScore === "Paper") && (humanScore=== "Paper")){

        console.log("Hmmm... It's a Tie! try again.")
       }

       else {
        console.log("You need to choose an option to play this game")
       }
}
}
  
  
  playRound(humanSelection, computerSelection);

  let roundOne = humanScore , machineScore//

  

  