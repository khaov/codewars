// Solution:

const rps = (p1, p2) => {
  const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  if (p1 === p2) {
    return `Draw!`;
  } else {
    return `Player ${rules[p1] === p2 ? 1 : 2} won!`;
  }
};

// Sample Tests:

rps('rock', 'scissors')     // 'Player 1 won!'
rps('scissors', 'paper')    // 'Player 1 won!'
rps('paper', 'rock')        // 'Player 1 won!'

rps('scissors', 'rock')     // 'Player 2 won!'
rps('paper', 'scissors')    // 'Player 2 won!'
rps('rock', 'paper')        // 'Player 2 won!'

rps('rock', 'rock')         // 'Draw!'
rps('scissors', 'scissors') // 'Draw!'
rps('paper', 'paper')       // 'Draw!'
