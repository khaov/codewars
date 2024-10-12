// Solution:

function pointsPer48(ppg, mpg) {
  return ppg !== 0 || mpg !== 0 ?
         Number((ppg / mpg * 48).toFixed(1)) :
         0;
}

// Sample Tests:

pointsPer48(12, 20)     // 28.8
pointsPer48(10, 10)     // 48.0
pointsPer48(5, 17)      // 14.1
pointsPer48(0, 0)       // 0
pointsPer48(30.8, 34.7) // 42.6
pointsPer48(22.9, 33.8) // 32.5
