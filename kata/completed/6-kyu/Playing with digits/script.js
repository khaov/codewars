// Solution:

function digPow(n, p){
  const s = n.toString().split('').reduce(function(sum, num, index){
    return sum += Math.pow(Number(num), p + index)
  }, 0);
  return Number.isInteger(k = s / n) ?  k : -1
}

// Sample Tests:

digPow(89, 1)     // 1
digPow(92, 1)     // -1
digPow(46288, 3)  // 51
digPow(695, 2)    // 2
digPow(46288, 3)  // 51
