

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
       let message = document.querySelector('.message');
       let winnerStats = document. querySelector('.winner');
       let humanChoice = document.querySelector('.humanChoice');
       let computerChoice = document.querySelector('.computerChoice');
   
    
            

     let humanScore = 0;
     let computerScore = 0; 
    
     
    
   
        
    
  
     const buttons = document.querySelectorAll("button");
     
        buttons.forEach((button) => { 
            
            
            let humanSelection = "";
     let computerSelection = getComputerChoice();
             
            button.addEventListener("click", ()=> {
                 humanSelection = button.id;
                 console.log(humanSelection); 
                 humanChoice.textContent = `YOU:${humanSelection} `; 
                 computerChoice.textContent = `COMPUTER:${computerSelection}`; 
                console.log(computerSelection); 
                
                function playRound(human,computer){


                    if (humanSelection === computerSelection){
                        gameStats.textContent = "It's a Tie";
                    } else if (humanSelection === "rock" && computerSelection === "scissors" ||
                               humanSelection === "paper" && computerSelection === "rock" ||
                               humanSelection === "scissors" && computerSelection === "paper"){
                                gameStats.textContent = "You Win this Round!!";
                                humanScore++;
                               } else if(humanSelection === "scissors" && computerSelection === "rock" ||
                                         humanSelection === "rock" && computerSelection === "paper" ||
                                         humanSelection === "paper" && computerSelection === "scissors"){
                                gameStats.textContent = "Computer wins this Round.";
                                computerScore++;
                               } else{
                                gameStats.textContent = "Choose your element."
                                
                             } 
                } 
               
                playRound(humanSelection, computerSelection);
                
 });
            
                
            ;}       
          );
       
//  function playGame (num){
    
//     for (let i =1; i <= num ; i++){ 
//         const result = `${i * i}`;
//         console.log(`${result}`);
//         if (i === 5){
//             console.log(`${"this loop is finished"}`);
//         } else if(i < 5){
//             console.log(`${"i am leveling up"}`);
//         }}
//  }
// playGame(5);
       
        
             function playGame(num){
                
            
                      for(let i = 1; i <= num; i++){
                          const gameRound = `${i == playRound()}`;
                          playRound()
                         
                         if (i === 5){
                        
                             para.textContent = `GAME-OVER =>\n\n\n Player 🧑‍🚀: ${ humanScore}  |  Computer 💻: ${computerScore}\n\n\n`;  
                         } else if(i<5){
                           
                             para.textContent = `Round: ${playRound()} => Player 🧑‍🚀: ${ humanScore}  |  Computer 💻: ${computerScore}\n\n\n`;
                                 
                         }}//winner();
                  }
               playGame(5);
          
//      // document.addEventListener("DOMContentLoaded",playGame);      
     
//    //}
    
//    function winner (){
//     if (humanScore > computerScore){
//         winnerStats.textContent ="Player wins the Game!!";
//     }
//     else if(humanScore < computerScore){
//         winnerStats.textContent ="Computer wins this time";}
//         else { 
//             winnerStats.textContent = "It's a tie";}
// }
    

//function restart(){

   //    let reset = prompt("TownHome! Ready to Play a New Game, Yes or No?;");
  //     if (reset === 'Yes'){
   //     playGame();
   //    } else{
   //     prompt("Play again Next time!!\n get ready for an Ultimate battle")
   //    }
    //}


    

    

