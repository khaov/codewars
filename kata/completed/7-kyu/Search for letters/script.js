// Solution:

function change(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const symbols = string.split('');

  return alphabet.map(letter => symbols.includes(letter) || symbols.includes(letter.toUpperCase()) ? 1 : 0).join('');
}

// Sample Tests:

change("a **&  bZ")       // "11000000000000000000000001"
change("a   **&  cZ")     // "10100000000000000000000001"
change("aaaaaaa79345675") // "10000000000000000000000000"
change("&%#*")            // "00000000000000000000000000"