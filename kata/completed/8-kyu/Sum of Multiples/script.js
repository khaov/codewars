// Solution:

function sumMul(n,m){
  let sum = 0;
  let mul = 1;

  while (n * mul < m) {
    sum += n * mul;
    mul++
  }

  return sum > 0 ? sum : "INVALID";
}

// Sample Tests:

sumMul(0,0)  //  "INVALID"
sumMul(2,9)  //  20
sumMul(4,-7) //  "INVALID"
