

  
  //function to display a random integer number
  const getRandomNumber = (integer) => Math.floor(Math.random()* integer);

  //function to get random Computer Choice
   let getComputerChoice = () => {
    let randomValue = getRandomNumber(3);

    if (randomValue === 0){
        return "Rock"; 
         
    } else if ( random === 1){
        return "Paper";
    }else { 
        return "Scissors"}
   };

 // Create variables to store play score.

let humanScore = 0;
let computerScore =0;
let round = 1;



 
// function to get Human Choice.
function getHumanChoice(input){
    console.log(window.prompt("Rock, Paper, Scissors, shoot!. ''"))
    getHumanChoice= document.querySelector(input);
    
    return (/input/i);
}
console.log(getHumanChoice());

 // loop to Play game five times

    function playRound(humanScore,computerScore){

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();


   // game structure

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
return humanScore;
return computerScore;

}



   
   function game() { 
    for (let i = 0; i < 5; i++) {
        playRound(); //remove console here.
        console.log(`Computer score: ${computerScore}`);
        console.log(`Your score: ${humanScore}`);
       }
    winner();
}

function winner() {
    if (computerScore > humanScore) {
        console.log("\nThe computer dominated your ass! Better luck next time!")
    } else if (computerScore < humanScore) {
        console.log("\nWay to crush it! You win!")
    } else {
        console.log("\nHoly shizzers! It's a tie!")
    }
}

  