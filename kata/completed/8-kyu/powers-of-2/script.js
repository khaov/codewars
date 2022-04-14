// Solution:

function powersOfTwo(n){
  let result = [];

 for (let i = 0; i <= n; i++) {
  result.push(Math.pow(2, i));
 }

  return result;
}

// Sample Tests:

powersOfTwo(0) // [1]
powersOfTwo(1) // [1, 2]
powersOfTwo(4) // [1, 2, 4, 8, 16]
