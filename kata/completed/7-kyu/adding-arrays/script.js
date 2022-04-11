// Solution:

function arrAdder(arr) {
  let sentence = [];
  let wordCount = arr[0].length;

  for (let i = 0; i < wordCount; i++) {
    let word = [];
    arr.forEach(function(item) {
      word.push(item[i])
    });
    sentence.push(word.join(''))
  }

  return sentence.join(' ');
}

// Sample Tests:

arrAdder([
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
]) // "Just Live Life Man"

arrAdder([ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ] 
]) // "The Mitochondria is the powerhouse of the cell"