// Solution:

function moreZeros(s){
  return s.split('')
    .map(character => character.charCodeAt(0).toString(2))
    .filter(binary =>
      binary.split('').filter(num => num === "0").length >
      binary.split('').filter(num => num === "1").length
    )
    .map(binary => String.fromCharCode(parseInt(binary, 2)))
    .filter((character, index, array) => index === array.indexOf(character));
}

// Sample Tests:

moreZeros('abcde')      // ['a','b','d']
moreZeros('Great job!') // ['a', ' ', 'b', '!']
moreZeros('DIGEST')     // ['D','I','E','T']
moreZeros('abcdeabcde') // ['a','b','d']
