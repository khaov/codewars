// Solution:

function getDivisorsCnt(n){
  let counter = 1;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      counter++
    }
  }
  return counter;
}

// Sample Tests:

getDivisorsCnt(1)   // 1
getDivisorsCnt(10)  // 4
getDivisorsCnt(11)  // 2
getDivisorsCnt(54)  // 8
