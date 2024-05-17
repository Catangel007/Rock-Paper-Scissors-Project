

  
  //function to display a random integer number
  const getRandomNumber = (integer) => Math.floor(Math.random()* integer);

  //function to get random Computer Choice
   let getComputerChoice = () => {
    let randomValue = getRandomNumber(3);
    if (randomValue === 0){
        return "rock";
        

    } else if ( random === 1){
        return "paper";
        

    }else { 
        return "scissors";
              
   };
   
};

 // Create variables to store play score.

let humanScore = 0;
let computerScore =0;
let round = 1;



 
// function to get Human Choice.
function getHumanChoice (){  
const rock = document.querySelector(".rock");
{rock.addEventListener("click", () => { 
    return "rock";
    
})}
const paper = document.querySelector(".paper");
{paper.addEventListener("click", () => {
     return "paper";
     
})}
{const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    return "scissors";
})}
}

const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
const message = document.querySelector(".message");


function playRound(humanScore,computerScore){
   // game structure
  
    if((computerSelection=== "rock") && (humanSelection=== "scissors")){      
   message.textContent = "You lose! Rock crushes Scissors";
     return computerScore++;
    }
    
    else if ((computerSelection==="rock") && (humanSelection=== "paper")){
        message.textContent = "Yeah, You win! Paper wraps rock.";
        return humanScore++;
    }

    else if ((computerSelection==="rock") && (humanSelection=== "rock")){
        message.textContent = "Hmmm... It's a Tie! try again.";
    }

    else if ((computerSelection=== "scissors") && (humanSelection=== "rock")){

        message.textContent = "You Win! Rock crushes Scissors";
        return humanScore++;
    }
    else if ((computerSelection=== "scissors") && (humanSelection=== "paper")){

        message.textContent = "You lose! Scissors cuts Paper";
       return computerScore++;
    }
    else if ((computerSelection=== "scissors") && (humanSelection=== "scissors")){

        message.textContent = "Hmmm... It's a Tie! try again.";
    }
       
    else if ((computerSelection=== "paper") && (humanSelection=== "rock")){

        message.textContent = "You Lose! Paper wraps rock!";
        return computerScore++;
    }
    else if ((computerSelection=== "paper") && (humanSelection=== "scissors")){

        message.textContent = "You win! Scissors cuts Paper.";
        return humanScore++;
    }
     else if ((computerSelection=== "paper") && (humanSelection=== "paper")){

        message.textContent = "Hmmm... It's a Tie! try again.";
       }

       else {
        message.textContent = "You need to choose an option to play this game";
       }
       
}



function game() { 
    for (let i = 0; i < 5; i++) {
        playRound(0,0); //remove console here.
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
        message.textContent = "\n\n\n\n\nHoly! It's a tie!";
    }
};
