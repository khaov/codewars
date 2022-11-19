// Solution:

function swap (string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return string.split('')
               .map(symbol => vowels.indexOf(symbol) !== -1 ? symbol.toUpperCase() : symbol)
               .join('');
}

// Sample Tests:

swap("");             // ""
swap("   @@@");       // "   @@@"
swap("HelloWorld!");  // "HEllOWOrld!"
swap("Sunday");       // "SUndAy"
swap("Codewars");     // "COdEwArs"
swap("Monday");       // "MOndAy"
swap("Friday");       // "FrIdAy"
swap("abracadabra");  // "AbrAcAdAbrA"
swap("AbrAcAdAbrA");  // "AbrAcAdAbrA"
swap("ABRACADABRA");  // "ABRACADABRA"
swap("aBRaCaDaBRa");  // "ABRACADABRA"
