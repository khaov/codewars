// Solution:

function oracle(gestures){
  let wins = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'};
  let hands = ['rock', 'paper', 'scissors'];
  let counts = [];

  for (let hand of hands) {
    let count = 0;
    for (let gesture of gestures) {
      if (wins[hand] === gesture) {
        count++
      } else if (hand !== gesture) {
        count--
      }
    }
    counts.push(count);
  }
  return counts.every(count => !count) ?
         'tie' :
         counts.map((win, index) => win > 0 ? hands[index] : null).filter(win => win).join('/')
}

// Sample Tests:

oracle(["rock","paper","scissors","rock"])              // "paper"
oracle(["rock","paper","scissors"])                     // "tie"
oracle(["rock","paper","paper","scissors","scissors"])  // "scissors"
oracle(["paper","scissors","scissors"])                 // "rock/scissors"
