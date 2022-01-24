// Solution:

function findMissingLetter(array) {
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const currentArray = array.join('').toLowerCase().split('')

  let missingLetter = ''

  currentArray.find(function(letter, index, array) {

    let letterAlphabetIndex = alphabet.indexOf(letter)

    if (index !== array.length-1 && array[index + 1] !== alphabet[letterAlphabetIndex + 1]){
      missingLetter = alphabet[letterAlphabetIndex + 1]
    }

  });

  if (array[0] === currentArray[0]){
    return missingLetter
  } else {
    return missingLetter.toUpperCase()
  }

}

// Sample Tests:

findMissingLetter(['a','b','c','d','f'])  // 'e'
findMissingLetter(['O','Q','R','S'])      // 'P'
