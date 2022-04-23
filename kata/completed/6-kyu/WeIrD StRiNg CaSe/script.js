// Solution:

function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}

// Sample Tests:

toWeirdCase('This')           // 'ThIs'
toWeirdCase('is')             // 'Is'
toWeirdCase('This is a test') // 'ThIs Is A TeSt'
