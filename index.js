


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
   } getComputerChoice();



     let para = document .querySelector('.score');
     let gameStats = document.querySelector('.game');
     let message = document.querySelector('dialog');
     let winnerStats = document. querySelector('.winner');
     let humanChoice = document.querySelector('.humanChoice');
     let computerChoice = document.querySelector('.computerChoice');
    let restart = document.querySelector("#restart")
    //restart.addEventListener("onclick", window.onload);
          
     let humanScore = 0;
     let computerScore = 0; 

   
   let humanSelection = "";
   let computerSelection = "";


    
   
   const buttons = document.querySelectorAll("button");
   

              buttons.forEach((button) => { 
               
                 button.addEventListener("click", ()=> {
                        
                       humanSelection = button.id;
                       computerSelection = getComputerChoice()
                       
                       humanChoice.textContent = `YOU:${humanSelection} `; 
                      computerChoice.textContent = `COMPUTER:${computerSelection}`; 
                      console.log(humanSelection);
                      console.log(computerSelection);
                      gameScore(); 
                     
       }); 
       });//buttons.addEventListener("click", clickHandler); 
      
  
 

function playRound(human,computer){


  if (humanSelection === computerSelection){
      gameStats.textContent = "It's a Tie, try again!!";
  } else if (humanSelection === "rock" && computerSelection === "scissors" ||
             humanSelection === "paper" && computerSelection === "rock" ||
             humanSelection === "scissors" && computerSelection === "paper"){
              humanScore++;
              gameStats.textContent = "You Win this Round!!";
             
              
              
             }
              else if(humanSelection === "scissors" && computerSelection === "rock" ||
                       humanSelection === "rock" && computerSelection === "paper" ||
                       humanSelection === "paper" && computerSelection === "scissors"){
                          computerScore++;
                          gameStats.textContent = "Computer wins this Round.";
                          
              
             } else{
                humanSelection= "";
                computerSelection="";
             
              
           }           
}



function gameScore(){
  
  for (let e = 1; e < 2; e++){
    playRound(humanSelection, computerSelection)
    
   for(let i= 1; i == e; i++){
   
     para.textContent = `Score => Player 🧑‍🚀: ${ humanScore}  |  Computer 💻: ${computerScore}\n\n\n`;
   }}winner();
  }
     
     
  

   function winner (){
     if ((humanScore > computerScore) && (humanScore + computerScore == 5)){
         winnerStats.textContent ="Player wins the Game!! GameOver.";
        alert( " Game-Over!!! Refresh the Page to Start-Again!");
     }
     else if((humanScore < computerScore) && (humanScore + computerScore == 5)){
         winnerStats.textContent ="Computer wins this time GameOver.";
         alert( " Game-Over!!! Refresh the Page to Start-Again!");
        } else if( (humanScore === computerScore) && !(humanScore + computerScore == 0)){ 
             winnerStats.textContent = "";}
             else {
              winnerStats.textContent= "";
             }
         }
  


  