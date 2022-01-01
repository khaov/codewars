// Solution:

function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const sourceArray = [];
  string.toLowerCase().split(' ').forEach(function(word) {
    word.split('').forEach(function(symbol) {
      if (alphabet.includes(symbol)) {
        sourceArray.push(symbol)
      }
    });
  });

  const uniqSymbols = sourceArray.filter(function(letter, index, array) {
    return array.lastIndexOf(letter) === index;
  });

  if (uniqSymbols.length === alphabet.length) {
    return true;
  } else {
    return false;
  }
}

// Sample Tests:

isPangram('The quick brown fox jumps over the lazy dog.') // true
isPangram('This is not a pangram.') // false
