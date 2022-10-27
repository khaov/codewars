// Solution:

function firstDup (s) {
  return s.split('').filter((character, index, array) => array.indexOf(character) !== array.lastIndexOf(character))[0];
}

// Sample Tests:

firstDup('tweet')       // 't'
firstDup('Ode to Joy')  // ' '
firstDup('ode to joy')  // 'o'
firstDup('bar')         // undefined
firstDup('123123')      // '1'
firstDup('!@#$!@#$')    // '!'
