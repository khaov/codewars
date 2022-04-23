// Solution:

function changer(str) {
  const vowels = 'aeiou'
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return str.toLowerCase().split('').map(function(symbol){
    if (alphabet.includes(symbol)) {
      let changeSymbol = ''

      if (symbol === 'z'){
        changeSymbol = 'a'
      } else {
        changeSymbol = alphabet[alphabet.indexOf(symbol) + 1]
      }

      if (vowels.includes(changeSymbol)){
        return changeSymbol.toUpperCase();
      } else {
        return changeSymbol
      }

    } else {
      return symbol
    }
  }).join('');
}

// Sample Tests:

changer('Cat30')        // 'dbU30'
changer('Alice')        // 'bmjdf'
changer('sponge1')      // 'tqpOhf1'
changer('Hello World')  // 'Ifmmp xpsmE'
changer('dogs')         // 'Epht'
changer('z')            // 'A'
