// Solution:

function kebabize(str) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return str.split('')
            .filter(symbol => alphabet.includes(symbol) ||  alphabet.includes(symbol.toLowerCase()))
            .map((letter, index) => letter !== letter.toLowerCase() && index !== 0 ? ` ${letter.toLowerCase()}` : letter.toLowerCase())
            .join('').split(' ').join('-');
}

// Sample Tests:

kebabize('myCamelCasedString')  //  'my-camel-cased-string'
kebabize('myCamelHas3Humps')    //  'my-camel-has-humps'
kebabize('Anyw')                //  'anyw'
