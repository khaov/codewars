// Solution:

function fizzbuzz(n) {

  let FizzBuzz = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      FizzBuzz.push('FizzBuzz')
    } else if (i % 3 === 0) {
      FizzBuzz.push('Fizz')
    } else if (i % 5 === 0) {
      FizzBuzz.push('Buzz')
    } else {
      FizzBuzz.push(i)
    }
  }

  return FizzBuzz

}

// Sample Tests:

fizzbuzz(10) // [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']
