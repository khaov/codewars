// Solution:

function removeDuplicateWords(s) {
  return s.split(' ')
          .filter((word, index, array) => index === array.indexOf(word))
          .join(' ');
}

// Sample Tests:

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') // 'alpha beta gamma delta'
