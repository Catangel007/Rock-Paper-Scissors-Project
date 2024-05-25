
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
     
      rock.addEventListener('click', getHumanChoice);
    
     paper.addEventListener('click', getHumanChoice)
     ;
     scissors.addEventListener('click', getHumanChoice);

      function getHumanChoice(){
        let clicked =[];
        if (rock.addEventListener){
            clicked.push("rock");
        }
        else if (paper.addEventListener){
            clicked.push("paper");
        }
        else if (scissors.addEventListener){
            clicked.push("scissors");
    }
      return clicked.toString();
}

      let humanScore  = 0;
    let computerScore = 0;

    let para = document .querySelector('.score');
let gameStats = document.querySelector('.game');
let message = document.querySelector('.message');
   let winner = document. querySelector('.winner');
    let choice = document.querySelector('.choice')
   
    function playRound(computerSelection = getComputerChoice(), humanSelection = getHumanChoice()){
        humanSelection;
        computerSelection;
         
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
    
}

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
    
    
choice.textContent = `YOU: humanSelection              COMPUTER: computerSelection`;
console.log(computerSelection);   
let num;


function playGame (num){
    
  for (let i= 1; i <= num; i++){
   
       
    
     if (i === num){
       
        para.textContent = "final Round";
        playRound();
        para.textContent = `GAME-OVER =>\n\n\n Player 🧑‍🚀: ${ humanScore}  |  Computer 💻: ${computerScore}\n\n\n`;
        restart();
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
        winner.textContent ="Player wins the Game!!";
    }
    else if(humanScore < computerScore){
        winner.textContent ="Computer wins this time";}
        else { 
            winner.textContent = "It's a tie";}
}

//function restart(){

   //    let reset = prompt("TownHome! Ready to Play a New Game, Yes or No?;");
  //     if (reset === 'Yes'){
   //     playGame();
   //    } else{
   //     prompt("Play again Next time!!\n get ready for an Ultimate battle")
   //    }
    //}


    

    

