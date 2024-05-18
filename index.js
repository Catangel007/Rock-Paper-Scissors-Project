   

   function getComputerChoice (){

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

    console.log (getComputerChoice());

    function getHumanChoice () {
        let result = prompt("Choose an Option to Play Game. Rock, Paper, Scissors?")
        return result;
    } console.log(getHumanChoice());

    const humanScore  = 0;
    const computerScore = 0;
    const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


    function playRound (humanChoice, computerChoice){
        getComputerChoice();
        getHumanChoice();

        if (humanSelection === "/rock/i" && computerSelection === "/Paper/i"){
            console.log(" Computer wins, Paper wraps rock!");
            computerScore++;
        }
        else if (humanSelection === "/rock/i" && computerSelection === "/Scissors/i"){
            console.log(" You Win, Rock breaks Scissors!");
            humanScore++;
        }
        else if (humanSelection === "/rock/i" && computerSelection === "/Rock/i"){
            console.log("it's a tie try again");

        }
        else if (humanSelection === "/paper/i" && computerSelection === "/Rock/i"){
            console.log("You win, Paper wraps rock!");
            humanScore++;
        }
        else if (humanSelection === "/paper/i" && computerSelection === "/Scissors/i"){
            console.log("Computer wins, Scissor cuts paper");
            computerScore++;
        }
        else if (humanSelection === "/paper/i" && computerSelection === "/Paper/i"){
            console.log("it's a tie try again");
            
        }
        else if (humanSelection === "/scissors/i" && computerSelection === "/Rock/i"){
            console.log("Computer wins, Rock breaks scissors");
            computerScore++;
        }
        else if (humanSelection === "/scissors/i" && computerSelection === "/Paper/i"){
            console.log("You win, Scissors cuts Paper");
            humanScore++;
        }
        else if (humanSelection === "/scissors/i" && computerSelection === "/Scissors/i"){
            console.log("it's a tie try again");
            
        }
        //else {
         //   console.log(" You need to Pick an Option to Play this Game")
      //  }
    }
 


function playGame ( num){
  for (let i= 1; i <= num; i++){

    playRound(humanSelection, computerSelection);
     if (i === num){
        console.log (`GAME-OVER\n Player: ${ humanScore}| Computer: ${computerScore}`)
     }
     else{
        console.log(`Round: ${i}`)
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