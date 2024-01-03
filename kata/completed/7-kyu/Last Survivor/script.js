// Solution:

function lastSurvivor(letters, coords) {
  let survivors = letters.split('');

  for (let i = 0; i < coords.length; i++) {
    survivors = survivors.filter((_, index) => index !== coords[i]);
  }

  return survivors.join('');
}

// Sample Tests:

lastSurvivor('abc', [1, 1]) // 'a'
lastSurvivor('kbc', [0, 1]) // 'b'
lastSurvivor('zbk', [2, 1]) // 'z'
lastSurvivor('c',   [])     // 'c'
