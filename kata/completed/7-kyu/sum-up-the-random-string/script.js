// Solution:

function sumFromString(str) {
  return (str.match(/\d+/g) || []).map(Number).reduce((sum, num) => sum += num, 0)
}

// Sample Tests:

sumFromString("In 2015, I want to know how much does iPhone 6+ cost?")  // 2021
sumFromString("1+1=2")                                                  // 4
sumFromString("e=mc^2")                                                 // 2
