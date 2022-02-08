// Solution:

function countBy(x, n) {

  let z = [];
  let numbersCounter = 0;
  let number = 1;

  do {

    if (number % x === 0){
      z.push(number);
      numbersCounter++
    }
    number++

  } while(numbersCounter < n);

  return z;

}

// Sample Tests:

countBy(1,10) // [1,2,3,4,5,6,7,8,9,10]
countBy(2,5)  // [2,4,6,8,10]
