// Solution:

var countBits = function(n) {
  return n.toString(2).split('').reduce(function(sum, num){
    return sum += Number(num)
  }, 0);
};

// Sample Tests:

countBits(0)    // 0
countBits(4)    // 1
countBits(7)    // 3
countBits(9)    // 2
countBits(10)   // 2
countBits(1234) // 5
