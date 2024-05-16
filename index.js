

  
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
function getHumanChoice (humanSelection){  
const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    return humanSelection= "rock";
})
const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    return humanSelection= "paper";
})
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    return humanSelection= "scissors";
})
}

const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
const message = document.querySelector(".message");


function playRound(humanScore,computerScore){
   // game structure
  
    if((computerSelection=== "Rock") && (humanSelection=== "Scissors")){      
   message.textContent = "You lose! Rock crushes Scissors";
    computerScore++;
    }
    
    else if ((computerSelection==="Rock") && (humanSelection=== "Paper")){
        message.textContent = "Yeah, You win! Paper wraps rock.";
        humanScore++;
    }

    else if ((computerSelection==="Rock") && (humanSelection=== "Rock")){
        message.textContent = "Hmmm... It's a Tie! try again.";
    }

    else if ((computerSelection=== "Scissors") && (humanSelection=== "Rock")){

        message.textContent = "You Win! Rock crushes Scissors";
        humanScore++;
    }
    else if ((computerSelection=== "Scissors") && (humanSelection=== "Paper")){

        message.textContent = "You lose! Scissors cuts Paper";
        computerScore++;
    }
    else if ((computerSelection=== "Scissors") && (humanSelection=== "Scissors")){

        message.textContent = "Hmmm... It's a Tie! try again.";
    }
       
    else if ((computerSelection=== "Paper") && (humanSelection=== "Rock")){

        message.textContent = "You Lose! Paper wraps rock!";
         computerScore++;
    }
    else if ((computerSelection=== "Paper") && (humanSelection=== "Scissors")){

        message.textContent = "You win! Scissors cuts Paper.";
        humanScore++;
    }
     else if ((computerSelection=== "Paper") && (humanSelection=== "Paper")){

        message.textContent = "Hmmm... It's a Tie! try again.";
       }

       else {
        message.textContent = "You need to choose an option to play this game";
       }
return humanScore;
return computerScore;

}



   
   function game() { 
    for (let i = 0; i < 5; i++) {
        playRound(); //remove console here.
        message.textContent = `\n\n\n\nComputer score: ${computerScore} |`;
        message.textContent = `Your score: ${humanScore}`;
       }
    winner();
}

function winner() {
    if (computerScore > humanScore) {
        message.textContent = "\n\n\n\n\nThe computer dominated your ass! Better luck next time!";
    } else if (computerScore < humanScore) {
        message.textContent = "\n\n\n\n\nWay to crush it! You win!";
    } else {
        message.textContent = "\n\n\n\n\nHoly shizzers! It's a tie!";
    }
}

  