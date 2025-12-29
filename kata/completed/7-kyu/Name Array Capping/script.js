// Solution:

function capMe(names) {
  return names.map(name => name.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter.toLowerCase()).join(''));
}

// Sample Tests:

capMe(['johnny'])                         // ['Johnny']
capMe(['RALPH', 'GEORGIA', 'CHRISTINA'])  // ['Ralph', 'Georgia', 'Christina']
