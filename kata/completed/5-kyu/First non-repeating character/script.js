// Solution:

function firstNonRepeatingLetter(s) {

  const index =  s.toLowerCase().split('').findIndex(function(letter, index, word){
    return word.indexOf(letter) === word.lastIndexOf(letter)
  });

  return index !== -1 ? s[index] : ''

}


// Sample Tests:

firstNonRepeatingLetter('a')        // 'a'
firstNonRepeatingLetter('stress')   // 't'
firstNonRepeatingLetter('sTress')   // 'T'
firstNonRepeatingLetter('moonmen')  // 'e'
