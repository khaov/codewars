// Solution:

function evenOrOdd(str) {

  function isEvenOrOdd(numbers, remainder) {
    return numbers
      .split('')
      .map(num => Number(num))
      .filter(num => num % 2 === remainder)
      .reduce((sum, num) => sum += num, 0)
  }

  switch (true) {
    case isEvenOrOdd(str, 0) > isEvenOrOdd(str, 1):
      return 'Even is greater than Odd'
      break;
    case isEvenOrOdd(str, 0) < isEvenOrOdd(str, 1):
      return 'Odd is greater than Even'
      break;
    case isEvenOrOdd(str, 0) === isEvenOrOdd(str, 1):
      return 'Even and Odd are the same'
      break;
  }
}

// Sample Tests:

evenOrOdd('12')   // 'Even is greater than Odd'
evenOrOdd('123')  // 'Odd is greater than Even'
evenOrOdd('112')  // 'Even and Odd are the same'
