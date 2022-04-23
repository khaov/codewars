// Solution:

function nextLetter(str) {

  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return str.split('').map(function(symbol){

    currentSymbol = symbol.toLowerCase();

    if (alphabet.includes(currentSymbol)) {

      targetIndex = alphabet.indexOf(currentSymbol);

      if (currentSymbol === "z") {
        targetSymbol = "a"
      } else {
        targetSymbol = alphabet[targetIndex+1]
      }

      if (currentSymbol === symbol){
        return targetSymbol
      } else {
        return targetSymbol.toUpperCase()
      }
    } else {
      return symbol
    }
  }).join('');
}

// Sample Tests:

nextLetter("My Name Is Zoo")    // "Nz Obnf Jt App")
nextLetter("What is your name") // "Xibu jt zpvs obnf"
nextLetter("zOo")               // "aPp"
