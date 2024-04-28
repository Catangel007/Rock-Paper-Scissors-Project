console.log("hello world")
const choices = ["Rock","Paper","Scissors"];
const random1 = Math.random();

function getComputerChoice(choices){

   random1 = choices[ (Math.floor(Math.random()*(choices.length)))];
   return random1;
}

function getHumanChoice(choice){
    getHumanChoice=window.prompt("Rock, Paper, Scissors shoot!")
    getHumanChoice= document.querySelector(input)
}