// Solution:

function divisibleByThree(str){
  return str.split('').reduce((sum, num) => sum += Number(num), 0) % 3 == 0;
}

// Sample Tests:

divisibleByThree('123')   // true
divisibleByThree('19254') // true
divisibleByThree('88')    // false
divisibleByThree('1')     // false
