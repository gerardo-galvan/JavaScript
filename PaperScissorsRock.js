/* The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.
*/

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb') {
      return userInput;
    } else {
      console.log('invalid input');
    }
  };
  
  function getComputerChoice (){
    randomNumber = Math.floor(Math.random() *3);
    switch(randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  };
  function determineWinner (userChoice, computerChoice) {
    if(userChoice ==='bomb'){
      return 'You won';
    }
    
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  }
  const playGame = () => {
     const userChoice = getUserChoice('paper');
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw:' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
  };
   
  playGame();
   
  