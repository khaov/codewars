// Solution:

function remainder(n, m){
  return n > m ? n % m : m % n;
}

// Sample Tests:

remainder(17,5)   // 2
remainder(13, 72) // 7
remainder(72, 13) // 7
remainder(1, 0)   // NaN
remainder(0, 0)   // NaN
