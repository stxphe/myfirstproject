// Readline is a module shipped with node, it is available when using the require statement
// process.stdin & process.stdout is what will prompt and write to console
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// change argument from `name` to whatever fits your context/program
// Prompt user for a number

let player = Math.random();
let computer= Math.random();

//function declareWinner(player, computer) {
//let result; 
//if (player >= computer);} {
//return 'You are a winner';} {
//if (player <= computer);} {
//return 'You are a loser';} { 
//if (player == computer);
  //return  'tie'}

  
  
readline.question('Enter your lucky number \n', player) ; {function declareWinner(player, computer) {
  let result; 
  if (player >= computer);} {
  return 'You are a winner';} {
  if (player <= computer);} {
  return 'You are a loser';} { 
  if (player == computer);
    return  'tie'}
  
  console.log(declareWinner)
  
  
  readline.question('Enter your lucky number \n', player) ; {
 
 
    console.log(computer)

  // Inside of this function scope, generate a random number (Google Math.random())
  // Console.log the result if users input is greater than, less than or equal to 
  // if less than, cpu wins
  // if greater than, user wins
  // if equal to, tie
      
}};