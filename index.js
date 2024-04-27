console.log("hello world")

const choices = ["Rock","Paper","Scissors"];
const random1 = Math.random();
function getComputerChoice(){
   random1 = choices[ Math.random(choices.length)];
   return random1;
}