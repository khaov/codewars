// Solution:

function squareIt(int) {
  let squareStr = [];

  const length = int.toString().length;
  const square = Math.sqrt(length);

  if(square === Math.round(length / square)) {
    for(let i = 0; i < length; i += square) {
      squareStr.push(int.toString().slice(i, i + square));
    }
    return squareStr.join('\n')
  } else {
    return 'Not a perfect square!';
  }
}

// Sample Tests:

squareIt(88989)     // "Not a perfect square!"
squareIt(1212 )     // "12\n12"
squareIt(123123123) // "123\n123\n123"
squareIt(112141568) // "112\n141\n568"
