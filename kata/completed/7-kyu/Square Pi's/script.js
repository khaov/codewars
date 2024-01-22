// Solution:

function squarePi(digits){
  let PI = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';

  return Math.ceil(
    Math.sqrt(
      PI.split('')
      .slice(0, digits)
      .map(num => Math.pow(num, 2))
      .reduce((sum, num) => sum += num, 0)
    )
  )
}

// Sample Tests:

squarePi(5)   // 8
squarePi(10)  // 15
