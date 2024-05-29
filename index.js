

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
                      
         });
         });
    
       
 function playRound(human,computer){


    if (humanSelection === computerSelection){
        gameStats.textContent = "It's a Tie";
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
                gameStats.textContent = "Choose your element."
                
             } 
} 



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
       
        function playGame(){
             
               for(let i =1; i < 2; i++){
                
                playRound(humanSelection, computerSelection)
                
                
               }
            }
          let game =  document.querySelector('body');
          game.addEventListener("click", playGame);

          function playGameFiveTimes(){
           for (let e = 1; e <= 5; e++){

            if (e === 5){
                console.log(para.textContent);
                 para.textContent = `GAME-OVER => Player 🧑‍🚀: ${ humanScore}  |  Computer 💻: ${computerScore}\n\n\n`;
             } else {
                 para.textContent = `Round:${e}  => Player 🧑‍🚀: ${ humanScore}  |  Computer 💻: ${computerScore}\n\n\n`;
                 console.log(para.textContent);
             }
            }
          } playGameFiveTimes();

    

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


    

    

