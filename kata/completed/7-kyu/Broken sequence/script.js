// Solution:

function findMissingNumber(sequence){
  const symbols = sequence.split(' ');

  if (symbols.every(symbol => symbol * 1 == symbol.toString())) {
    const numbers = symbols.sort((prev, next) => prev - next).map(number => Number(number))

    if (numbers[0] == 0) {
      return 0;
    } else if (numbers[0] != 1) {
      return 1;
    } else {
      for(let index = 0; index < numbers.length - 1; index++) {
        if (numbers[index] !== numbers[index + 1] - 1) {
          return numbers[index] + 1;
          break;
        }
      }
      return 0;
    }
  } else {
    return 1;
  }
}

// Sample Tests:

findMissingNumber("1 2 3 5")    // 4, "It must work for missing middle terms"
findMissingNumber("1 3")        // 2, "It must work for missing middle terms"
findMissingNumber("1 5")        // 2, "It must work for missing more than one number"
findMissingNumber("")           // 0, "It must return 0 for an empty sequence"
findMissingNumber("1 2 3 4 5")  // 0, "It must return 0 if no number is missing"
findMissingNumber("2 3 4 5")    // 1, "It must return 1 for a sequence missing the first element"
findMissingNumber("2 6 4 5 3")  // 1, "It must work for a shuffled input"
findMissingNumber("2 1 4 3 a")  // 1, "It must return 1 for an invalid sequence"
