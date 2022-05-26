// Solution:

function sameCase(a, b){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  if (alphabet.includes(a.toLowerCase()) && alphabet.includes(b.toLowerCase())) {
   return (a.toLowerCase() === a && b.toLowerCase() === b) ||
          (a.toUpperCase() === a && b.toUpperCase() === b) ? 1 : 0;
  } else {
    return -1;
  }
}

// Sample Tests:

sameCase('0', '?')  // -1
sameCase('A', 'C')  // 1
sameCase('d', 'd')  // 1
sameCase('A', 's')  // 0
