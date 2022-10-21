// Solution:

const numbers = {
  zero:   0,
  one:    1,
  two:    2,
  three:  3,
  four:   4,
  five:   5,
  six:    6,
  seven:  7,
  eight:  8,
  nine:   9
}

function averageString(str) {
  return Object.keys(numbers).find(key =>
    numbers[key] === Math.floor(str.split(' ').map(number => numbers[number]).reduce((sum, num) => sum += num) / str.split(' ').length)) || "n/a";
}

// Sample Tests:

averageString("zero nine five two")       // "four"
averageString("four six two three")       // "three"
averageString("one two three four five")  // "three"
averageString("five four")                // "four"
averageString("zero zero zero zero zero") // "zero"
averageString("one one eight one")        // "two"
averageString("")                         // "n/a"
