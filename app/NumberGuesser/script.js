let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuesses, target) => {
if (Math.abs(target - humanGuess) < Math.abs(target - computerGuesses)){ 
return true;
  }else if (Math.abs(target - humanGuess) > Math.abs(target - computerGuesses)){
return false;
  }else {
return true;
  }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;