// Solution:

function solve(a,b){
  const digits = ['3', '5', '8'];
  let counter = 0;

  digits.includes('8')

  for (let n = a; n < b; n++) {
    const numberDigits = n.toString().split('');
    if (numberDigits.every(digit => digits.includes(digit)) === true) {
      if (
        numberDigits.filter(digit => digit == '8').length >= numberDigits.filter(digit => digit == '5').length &&
        numberDigits.filter(digit => digit == '5').length >= numberDigits.filter(digit => digit == '3').length
      ) {
        counter++
      }
    }
  }

  return counter;
}

// Sample Tests:

solve(0,100)    // 4
solve(0,1000)   // 14
solve(0,10000)  // 37
solve(0,100000) // 103
solve(0,500000) // 148
