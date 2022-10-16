// Solution:

function mirror(text){
  const mirrorWidth = text.split(' ').sort((prev, next) => next.length - prev.length)[0].length + 4;
  const spacesWidth = text.split(' ').sort((prev, next) => next.length - prev.length)[0].length;

  const topBorder = '*'.repeat(mirrorWidth) + '\n';
  const bottomBorder = '*'.repeat(mirrorWidth);

  const mirroredWords = text.split(' ').map(word => '* '+ word.split('').reverse().join('') +' '.repeat(spacesWidth - word.length)+' *\n').join('').replace(/\*\n\n\*/g,'*\n*');

  return topBorder + mirroredWords + bottomBorder;
}

// Sample Tests:

mirror('Hello World') // '*********\n* olleH *\n* dlroW *\n*********'
mirror('Codewars')    // '************\n* srawedoC *\n************'
