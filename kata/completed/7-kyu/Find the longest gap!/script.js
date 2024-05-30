// Solution:

function gap(num) {
  return Math.max.apply(null, (num.toString(2).match(/(?=1)*(0)+(?=1)/g) || ['']).map(gap => gap.length));
}

// Sample Tests:

gap(9)    // 2
gap(529)  // 4
gap(20)   // 1
gap(15)   // 0
