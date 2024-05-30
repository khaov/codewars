// Solution:

function isItLetter(character) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return alphabet.includes(character.toLowerCase()) ? true : false;
}

// Sample Tests:

isItLetter('a') // true, `'a' is a letter`
isItLetter('1') // false, `'1' is not a letter`
