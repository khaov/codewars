// Solution:

function battleCodes(armyLetters, armyNumbers) {
  const letters = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
  }

  const numbers = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  }

  const lettersKeys = Object.keys(letters);
  const numbersKeys = Object.keys(numbers);

  if (!armyLetters.length || !armyNumbers) {
    return 'Peace'
  } else {

    let lettersArray = armyLetters.split('');
    let numbersArray = armyNumbers.split('').reverse();

    let firstLetter = lettersArray.pop();
    let secondLetter = lettersArray.pop();
    let singleNumber = numbersArray.pop();

    firstLetterWeight = letters[firstLetter] - numbers[singleNumber];
    secondLetterWeight = letters[secondLetter] - numbers[singleNumber];
    singleNumberWeight = numbers[singleNumber] - letters[firstLetter];

    if (secondLetterWeight > 0) { lettersArray.push(lettersKeys[secondLetterWeight - 1]) };
    if (firstLetterWeight > 0) { lettersArray.push(lettersKeys[firstLetterWeight - 1]) };
    if (singleNumberWeight > 0) { numbersArray.push(numbersKeys[singleNumberWeight - 1]) };

    if (lettersArray.length && !numbersArray.length) {
      return lettersArray.join('');
    }

    if (!lettersArray.length && numbersArray.length) {
      return numbersArray.reverse().join('');
    }

    if (!lettersArray.length && !numbersArray.length) {
      return 'Draw';
    }

    if (lettersArray.length && numbersArray.length) {
      let armyLetters = lettersArray.join('');
      let armyNumbers = numbersArray.reverse().join('');
      return battleCodes(armyLetters, armyNumbers);
    }

  }

}

// Sample Tests:

battleCodes('abc', '1')   // 'aab'
battleCodes('ah', '8')    // 'Draw'
battleCodes('abc', '123') // '2'
battleCodes('z', '99')    // 'h'
battleCodes('a', '')      // 'Peace'
battleCodes('', '8')      // 'Peace'
battleCodes('', '')       // 'Peace'
