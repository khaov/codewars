// Solution:

function hexToDec(hexString){
  return parseInt(hexString, 16)
}

// Sample Tests:

hexToDec("1")   // 1
hexToDec("a")   // 10
hexToDec("10")  // 16
hexToDec("FF")  // 255
hexToDec("-C")  // -12
