// Solution:

function fakeBin(x){
  return x.split('').map(function(n){
    return n < 5 ? 0 : 1
  }).join('');
}

// Sample Tests:

fakeBin('45385593107843568')            // '01011110001100111'
fakeBin('509321967506747')              // '101000111101101'
fakeBin('366058562030849490134388085')  // '011011110000101010000011011'
