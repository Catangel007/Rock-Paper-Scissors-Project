
   function getComputerChoice(){

    randomNum = Math.floor(Math.random()*3);
    
     if (randomNum === 0){
        return "rock";}
        else if (randomNum === 1){
            return "paper";
        }
        else {
            return "scissors";
    }    
     } 

      function getHumanChoice(){
        let humanSelection1 = prompt("Choose an Option to Play Game. Rock, Paper, Scissors?");
         humanSelection1.toLowerCase();
         return humanSelection1;
      }

      let humanScore  = 0;
    let computerScore = 0;
    
   
    function playRound(computerSelection=getComputerChoice(), humanSelection=getHumanChoice()){
        humanSelection;
        computerSelection;
         
        if (computerSelection ==="rock" && humanSelection ==="paper"  || 
        computerSelection ==="scissors" && humanSelection ==="rock" || 
        computerSelection ==="paper" && humanSelection ==="scissors")
        { humanScore++
            console.log('You Win!')}
         else if (computerSelection ==="scissors" && humanSelection ==="paper" || 
                  computerSelection ==="rock" && humanSelection ==="scissors" || 
                  computerSelection ==="paper" && humanSelection === "rock")//
        {   computerScore++
            console.log("Computer Wins!");    
        } else {
            console.log("Tie");
        
        }
    
}
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
    
    
console.log(humanSelection);
console.log(computerSelection);   
    let num;
function playGame (num){
    
  for (let i= 1; i <= num; i++){
   
       
    
     if (i === num){
       
        console.log ("final Round");
        playRound();
        console.log (`GAME-OVER\n Player: ${ humanScore}| Computer: ${computerScore}\n\n\n`);
        restart();
     }
     else{
        console.log(`Round: ${i}`)
        playRound();
     }
    
  }
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

       let reset = prompt("TownHome! Ready to Play a New Game, Yes or No?;");
       if (reset === 'Yes'){
        playGame();
       } else{
        prompt("Play again Next time!!\n get ready for an Ultimate battle")
       }
    }

