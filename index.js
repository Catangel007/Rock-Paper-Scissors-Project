
   let getComputerChoice =function (){

    randomNum = Math.floor(Math.random()*3);
    
     if (randomNum === 0){
        return "Rock";}
        else if (randomNum === 1){
            return "Paper";
        }
        else {
            return "Scissors";
    }
    
     }

   

      function getHumanChoice(){
        let humanSelection1 = prompt("Choose an Option to Play Game. Rock, Paper, Scissors?");
         humanSelection1.toLowerCase();
         return humanSelection1;
      }

      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      
   


    function playRound(computerSelection, playerSelection){
        if (computerSelection ==="rock" && humanSelection ==="paper"  || computerSelection ==="scissors" && humanSelection ==="rock" || computerSelection ==="paper" && humanSelection ==="scissors")
        {  humanScore++;
            return "You Win!";
        } else if (computerSelection ==="scissors" && humanSelection ==="paper" || computerSelection ==="rock" && playerSelection ==="scissors" || computerSelection ==="paper" && humanSelection === "rock")//
        {   computerScore++;
            return "You Lose!";    
        } else {
            return "Tie";
        
        }
        
        }
    
    
    
console.log(humanSelection);
console.log(computerSelection);


    
    
function playGame ( num){
  for (let i= 1; i <= num; i++){
    playGame=1;
    getComputerChoice();
       getHumanChoice();
       let humanScore  = 0;
    let computerScore = 0;
       
    
     if (i === num){
        console.log (`GAME-OVER\n Player: ${ humanScore}| Computer: ${computerScore}`)
        Restart()
     }
     else{
        console.log(`Round: ${i}`)
     }
    
  }
  playRound(humanSelection, computerSelection)
  winner();
} playGame(5);


function winner (){
    if (humanScore > computerScore){
        console.log("Player wins the Game!!");
    }
    else if(humanScore < computerScore){
        console.log("Computer wins this time");}
        else { console.log("It's a tie");}
}

function restart(){
    if (playGame === num){
        console.log(" TownHome! Ready to Play a new Game?")
        let answer = [yes,no];
            if (answer == yes){
                playGame();
            }
            else{ ''};
        }
    }

