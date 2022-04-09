// Solution:

function insertDash(num) {
  return num.toString().split('').map(function(number, index, array) {
    if (number %2 !== 0 && array[index+1] %2 !== 0 && index !== array.length-1) {
      return `${number}-`
    } else  {
      return number
    }
  }).join('');
}

// Sample Tests:

insertDash(454793)  // '4547-9-3'
insertDash(123456)  // '123456'
insertDash(1003567) // '1003-567'
