

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

     
      const rock = document.querySelector("#rock");
      const paper = document.querySelector("#paper");
      const scissors = document.querySelector("#scissors");
      let humanChoice =(
      (rock.addEventListener('click', getHumanChoice ))||
      (paper.addEventListener('click', getHumanChoice ))||
     (scissors.addEventListener('click', getHumanChoice))
    )
     
     function getHumanChoice(){
       
       if (humanChoice == rock.addEventListener('click', getHumanChoice )){
        return "rock";
       } else if (humanChoice == paper.addEventListener('click', getHumanChoice )){
        return "paper";
       } else if (scissors.addEventListener('click', getHumanChoice)){
        return "scissors"
       }
    }
      
       
      let humanScore  = 0;
      let computerScore = 0;

       let para = document .querySelector('.score');
       let gameStats = document.querySelector('.game');
       let message = document.querySelector('.message');
       let winnerStats = document. querySelector('.winner');
       let choice = document.querySelector('.choice')
   
    function playRound( computerSelection = getComputerChoice(),  humanSelection = getHumanChoice()){
        
        if (computerSelection ==="rock" && humanSelection ==="paper"  || 
            computerSelection ==="scissors" && humanSelection ==="rock" || 
            computerSelection ==="paper" && humanSelection ==="scissors")
        { humanScore++
            gameStats.textContent ='You Win!'}
         else if (computerSelection ==="scissors" && humanSelection ==="paper" || 
                  computerSelection ==="rock" && humanSelection ==="scissors" || 
                  computerSelection ==="paper" && humanSelection === "rock")//
        {   computerScore++
            gameStats.textContent ="Computer Wins!";    
        } else {
            gameStats.textContent ="Tie";
        
        }
    
}const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

      
    
    
   choice.textContent = `YOU:${humanSelection}  <====>   COMPUTER:${computerSelection}`;
console.log(computerSelection); 
console.log(humanSelection);  
let num;


function playGame (num){
    
    
    
  for (let i= 1; i <= num; i++){
   
       
    
     if (i === num){
       
        para.textContent = "final Round";
        playRound();
        para.textContent = `GAME-OVER =>\n\n\n Player 🧑‍🚀: ${ humanScore}  |  Computer 💻: ${computerScore}\n\n\n`;
       // restart();
     }
     else{
        para.textContent = `Round: ${i}`;
        playRound();
     }
    
  }
  winner();
  
} playGame(5);


function winner (){
    if (humanScore > computerScore){
        winnerStats.textContent ="Player wins the Game!!";
    }
    else if(humanScore < computerScore){
        winnerStats.textContent ="Computer wins this time";}
        else { 
            winnerStats.textContent = "It's a tie";}
}

//function restart(){

   //    let reset = prompt("TownHome! Ready to Play a New Game, Yes or No?;");
  //     if (reset === 'Yes'){
   //     playGame();
   //    } else{
   //     prompt("Play again Next time!!\n get ready for an Ultimate battle")
   //    }
    //}


    

    

