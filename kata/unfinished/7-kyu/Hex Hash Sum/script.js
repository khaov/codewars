// Solution:

function hexHash(code){
  return code.split('').map(symbol => symbol.toString(16))
}

// Sample Tests:

hexHash('Yo')             // 20
hexHash('Hello, World!')  // 91
hexHash('Forty4Three')    // 113
