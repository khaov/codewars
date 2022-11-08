// Solution:

function position(letter){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabet.split('').indexOf(letter) + 1}`;
}

// Sample Tests:

position("a") // "Position of alphabet: 1"
position("z") // "Position of alphabet: 26"
position("e") // "Position of alphabet: 5"
