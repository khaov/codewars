// Solution:

function listSquared(m, n) {

  let squared = [];

  for (let number = m; number <= n; number++) {

    let divisors = [];

    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(Math.pow(i, 2))
      }
    }

    const divisorsSum = divisors.reduce((sum, num) => sum = sum + num, 0);

    if (divisorsSum === Math.pow(Math.round(Math.sqrt(divisorsSum)), 2)) {
      squared.push([number, divisorsSum]);
    }

  }

  return squared;
}

// Sample Tests:

listSquared(1, 250)   //  [[1, 1], [42, 2500], [246, 84100]]
listSquared(42, 250)  //  [[42, 2500], [246, 84100]]
listSquared(250, 500) //  [[287, 84100]]
