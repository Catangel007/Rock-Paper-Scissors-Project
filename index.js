
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
        
    
    
console.log(humanSelection);
console.log(computerSelection);   
let num;


function playGame (num){
    
  for (let i= 1; i <= num; i++){
   
       
    
     if (i === num){
       
        para.textContent = "final Round";
        playRound();
        para.textContent = `\nGAME-OVER\n Player${one}: ${ humanScore}| Computer💻: ${computerScore}\n\n\n`;
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
        gameStats.textContent ="Player wins the Game!!";
    }
    else if(humanScore < computerScore){
        gameStats.textContent ="Computer wins this time";}
        else { 
            gameStats.textContent = "It's a tie";}
}

function restart(){

       let reset = prompt("TownHome! Ready to Play a New Game, Yes or No?;");
       if (reset === 'Yes'){
        playGame();
       } else{
        prompt("Play again Next time!!\n get ready for an Ultimate battle")
       }
    }

let body = document.querySelector('body');
 
body.addEventListener('click', (event)=>{
    let target = event .target;

    switch(target.class){
        case 'one': "lorem"
           break;
           case 'two': "lorem"
           break;
           case 'three': "lorem"
           break;
           case 'four': "lorem"
           break;
           case 'rock': "lorem"
           break;
           case 'paper': "lorem"
           break;
           case 'scissors': "lorem"
           break;

           
    }
});

let para = document .querySelector('p');
let gameStats = document.querySelector('span');
let message = document.querySelector('.message');