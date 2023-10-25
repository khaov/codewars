// Solution:

function bingo(a) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const bingo = "BINGO".split('').map(letter => alphabet.indexOf(letter.toLowerCase()) + 1)
                       .sort((prev, next) => prev - next);

  const bingoLetters = a.filter((letter,index, array) => bingo.includes(letter) && index === array.lastIndexOf(letter))
                        .sort((prev, next) => prev - next);

   return bingo.every((letter, index) => letter === bingoLetters[index]) ? "WIN" : "LOSE";
}

// Sample Tests:

bingo([1,2,3,4,5,6,7,8,9,10])     // "LOSE"
bingo([21,13,2,7,5,14,7,15,9,10]) // "WIN"
