// Solution:

function HQ9(code) {
  switch (code) {
    case 'H':
      return 'Hello World!'
      break;
    case 'Q':
      return code;
      break;
    case '9':
      let lyrics = '';

      for (let i = 99; i >= 3; i--) {
        lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.\n`
      }

      return lyrics + '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
      break;
  }
}

// Sample Tests:

HQ9('H') // 'Hello World!', '\'H\' should return \'Hello World!\''
HQ9('Q') // 'Q', '\'Q\' should return \'Q\''
HQ9('9') // '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around'
HQ9('X') // undefined, 'Everything else should not return anything'
