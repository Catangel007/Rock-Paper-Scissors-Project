

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
     let para = document .querySelector('.score');
       let gameStats = document.querySelector('.game');
       let message = document.querySelector('.message');
       let winnerStats = document. querySelector('.winner');
       let humanChoice = document.querySelector('.humanChoice');
       let computerChoice = document.querySelector('.computerChoice');
   
     let humanSelection;
     let computerSelection;
     
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            
            button.addEventListener("click", (buttons)=> {
                let humanSelection = button.id;
                 humanChoice.textContent = `YOU:${humanSelection}  <====> `; 
                 computerChoice.textContent = `COMPUTER:${computerSelection}`; 
                  computerSelection = getComputerChoice();  
            });
               
           
        });
       
        console.log(computerSelection); 
        console.log(humanSelection); 
         
      let humanScore  = 0;
      let computerScore = 0;

       


      
humanSelection;
computerSelection;
    
    
let num;


function playGame (){

    for (let i= 1; i <= 5; i++){

    function playRound( computerSelection = getComputerChoice(),  humanSelection= buttons){
        

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
    
    
    
  
   
       
    
     if (i === 5){
       
        para.textContent = "final Round\n";
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
  
} playGame();


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


    

    

