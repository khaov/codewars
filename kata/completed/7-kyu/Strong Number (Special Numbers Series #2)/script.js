// Solution:

function strong(n) {
  function factorial(n) {
    let factorialResult = 1;
    for (i = 1; i <= n; i++){
        factorialResult *= i;
    }
    return factorialResult;
  }

  const factorialSum = n.toString().split('')
                        .map(num => factorial(Number(num)))
                        .reduce((num, sum) => sum += num, 0);

  return n === factorialSum ?"STRONG!!!!" : "Not Strong !!";
}

// Sample Tests:

strong(1)   // "STRONG!!!!"
strong(2)   // "STRONG!!!!"
strong(145) // "STRONG!!!!"
strong(7)   // "Not Strong !!"
strong(93)  // "Not Strong !!"
strong(185) // "Not Strong !!"
