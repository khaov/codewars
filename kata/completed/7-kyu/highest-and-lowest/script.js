// Solution:

function highAndLow(numbers){
  if (numbers.split(' ').length === 1) {
    return `${numbers} ${numbers}`
  } else {
    return numbers.split(' ').sort((a, b) => b - a)
                  .filter((number, index, array) => index === 0 || index === array.length - 1)
                  .join(' ');
  }
}

// Sample Tests:

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")  //  "42 -9"
highAndLow("1 2 3")                         //  "3 1"
highAndLow("42")

