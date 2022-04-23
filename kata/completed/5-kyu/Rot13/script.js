// Solution:

function rot13(message){
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let cipher = []

  function checkLetterCase(source, current, target) {
    if (source === current){
      cipher.push(target)
    } else {
      cipher.push(target.toUpperCase())
    }
  }

  message.split('').map(function(symbol){

    const currentSymbol = symbol.toLowerCase();

    if (alphabet.includes(currentSymbol)){
      const symbolIndex = alphabet.indexOf(currentSymbol);
      let targetSymbol = '';
      if (symbolIndex <= 12) {
        targetSymbol = alphabet[symbolIndex + 13]
        checkLetterCase(symbol, currentSymbol, targetSymbol)
      } else {
        targetSymbol = alphabet[symbolIndex - 13]
        checkLetterCase(symbol, currentSymbol, targetSymbol)
      }
    } else {
      cipher.push(symbol)
    }
  });

  return cipher.join('')
}

// Sample Tests:

rot13("test") // grfg
rot13("Test") // Grfg
