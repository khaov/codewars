// Solution:

function gimmeTheLetters(sp) {
  const alphabet  = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const borders = sp.toLowerCase().split('-');
  const sequence = alphabet.slice(alphabet.indexOf(borders[0]), alphabet.indexOf(borders[1]) + 1).join('');

  return sp[0] === sp[0].toLowerCase() ?  sequence : sequence.toUpperCase();
}

// Sample Tests:

gimmeTheLetters('J-J') // 'J', `'J-J'`
gimmeTheLetters('Z-Z') // 'Z', `'Z-Z'`
gimmeTheLetters('a-a') // 'a', `'a-a'`

gimmeTheLetters('a-b') // 'ab', `'a-b'`
gimmeTheLetters('y-z') // 'yz', `'y-z'`
gimmeTheLetters('H-I') // 'HI', `'H-I'`

gimmeTheLetters('g-i') // 'ghi', `'g-i'`
gimmeTheLetters('W-Y') // 'WXY', `'W-Y'`

gimmeTheLetters('Q-Z') // 'QRSTUVWXYZ',       `'Q-Z'`
gimmeTheLetters('F-O') // 'FGHIJKLMNO',       `'F-O'`
gimmeTheLetters('C-R') // 'CDEFGHIJKLMNOPQR', `'C-R'`

gimmeTheLetters('h-o') // 'hijklmno',          `'h-o'`
gimmeTheLetters('e-k') // 'efghijk',           `'e-k'`
gimmeTheLetters('a-q') // 'abcdefghijklmnopq', `'a-q'`

gimmeTheLetters('a-z') // 'abcdefghijklmnopqrstuvwxyz', `'a-z'`
gimmeTheLetters('A-Z') // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', `'A-Z'`
