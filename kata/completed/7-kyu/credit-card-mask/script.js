// Solution:

function maskify(cc) {
  return cc.split('').map(function(symbol, index, array) {
    if (index < array.length-4) {
      return '#'
    } else {
      return symbol
    }
  }).join('');
}

// Sample Tests:

maskify('4556364607935616') // '############5616'
maskify('1')                // '1'
maskify('11111')            // '#1111'
