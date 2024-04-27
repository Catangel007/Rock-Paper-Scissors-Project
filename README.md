
ROCK, PAPER, SCISSORS, SHOOT!

Players start each round by saying, “rock, paper, scissors, shoot!” On “shoot,” each player holds out their fist for rock, flat hand for paper, or their index and middle finger for scissors. Rock crushes scissors, scissors cut paper, and paper covers rock. See who wins each round!

STEP1
     Create code environment ready to write your game code.
     link external javascript document and console.log on browser console.

STEP2
     Create an new function 'getComputerChoice' to randomly return values "rock","paper", "scissors". 
     hint: Use Math.random function to display random numbers that are greater or equal to zero and less than 1. troubleshoot ways to use value to conditionally return one of the multiple choices.

STEP3
Write the logic to get human choice.
     Create  a new function named getHumanChoice.
     Write a code so that getHumanChoice will return one of the valid choices depending on what the user inputs. hint: Prompt to get the user input.
     test your function by using console.log

STEP4
Record Players score by creating variables to keep track of them.
     Create two variables names humanScore and computerScore in the global scope.
     initialize those variables with value of 0.

STEP5
Write a simple code to play round one.
    Create a function named playRound.
    Define two parameters for playRound: humanChoice and computerChoice.
    Make your functions humanSelection parameter case-insensitive so that players can input "rock"."ROCK","Rock", or other variations.
    Write the code for your playRound function to console.log a string value representing the round winner, such as:" You lose! Paper beats Rock.".
    Increment the humanScore or computerScore variable based on the round winner.

STEP6
Write the logic to Play the entire Game.
     Create a new function named playGame.
     Move your playRound function and score variables so that they're declared inside of the new playGame function.
     Play 5 rounds by calling playRound 5 times