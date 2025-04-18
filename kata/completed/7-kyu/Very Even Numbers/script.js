// Solution:

function isVeryEvenNumber(n) {
  const length = n.toString().length;

  if (length == 1) {
    return n % 2 == 0;
  } else {
    let number = n;

    while (number.toString().length !== 1) {
      number = number.toString().split('').reduce((sum, num) => sum += Number(num), 0)
    }

    return number % 2 == 0;
  }
}

// Sample Tests:

isVeryEvenNumber(0)         // true
isVeryEvenNumber(4)         // true
isVeryEvenNumber(12)        // false
isVeryEvenNumber(222)       // true
isVeryEvenNumber(5)         // false
isVeryEvenNumber(45)        // false
isVeryEvenNumber(4554)      // false
isVeryEvenNumber(1234)      // false
isVeryEvenNumber(88)        // false
isVeryEvenNumber(24)        // true
isVeryEvenNumber(400000220) // true
