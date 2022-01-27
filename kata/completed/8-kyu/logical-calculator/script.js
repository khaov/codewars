// Solution:

const operations = {
  'AND': (a, b) => a && b,
  'OR': (a, b) => a || b,
  'XOR': (a, b) => a !== b,
}

function logicalCalc(array, op){
  return array.reduce(operations[op]);
}

// Sample Tests:

logicalCalc([true, true, true, false], "AND")   // false
logicalCalc([true, true, true, false], "OR")    // true
logicalCalc([true, true, true, false], "XOR")   // true
logicalCalc([true, true, false, false], "AND")  // false
logicalCalc([true, true, false, false], "OR")   // true
logicalCalc([true, true, false, false], "XOR")  // false
logicalCalc([true, false, false, false], "AND") // false
logicalCalc([true, false, false, false], "OR")  // true
logicalCalc([true, false, false, false], "XOR") // true
logicalCalc([true, true], "AND")                // true
logicalCalc([true, true], "OR")                 // true
logicalCalc([true, true], "XOR")                // false
logicalCalc([false, false], "AND")              // false
logicalCalc([false, false], "OR")               // false
logicalCalc([false, false], "XOR")              // false
logicalCalc([false], "AND")                     // false
logicalCalc([false], "OR")                      // false
logicalCalc([false], "XOR")                     // false
logicalCalc([true], "AND")                      // true
logicalCalc([true], "OR")                       // true
logicalCalc([true], "XOR")                      // true
