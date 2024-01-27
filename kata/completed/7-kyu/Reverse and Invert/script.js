// Solution:

function reverseInvert(array) {
  return array.filter(item => typeof item === 'number' && Number.isInteger(item))
              .map(number => number >= 0 ?
                   Number(number.toString().split('').reverse().join('')) * -1 :
                   Number(Math.abs(number).toString().split('').reverse().join(''))
              );
}

// Sample Tests:

reverseInvert([1,2,3,4,5])                        // [-1,-2,-3,-4,-5]
reverseInvert([-10])                              // [1]
reverseInvert([-9,-18,99])                        // [9,81,-99]
reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6])  // [-1,-21,-78,24,-5]
reverseInvert([])                                 // []
