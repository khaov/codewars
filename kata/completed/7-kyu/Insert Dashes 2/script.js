// Solution:

function insertDashII(num) {
  return num.toString().split('').map(function(number, index, array) {
    if (
      number % 2 !== 0 &&
      array[index + 1] % 2 !== 0 &&
      index !== array.length-1) {
        return `${number}-`;
    } else if (
      number % 2 === 0 &&
      array[index + 1] % 2 === 0 &&
      number !== '0' &&
      array[index + 1] !== '0' ) {
        return `${number}*`;
    } else {
      return number;
    }
  }).join('');
}

// Sample Tests:

insertDashII(454793)      // '4547-9-3'
insertDashII(123456)      // '123456'
insertDashII(40546793)    // '4054*67-9-3'
insertDashII(1012356895)  // '10123-56*89-5'
