// Solution:

// const remainder = (D, d) => D%d;

const remainder = (D, d) => D - (Math.floor(D / d) * d)

// Sample Tests:

remainder(3,2)  // 1
remainder(19,2) // 1
remainder(10,2) // 0
remainder(34,7) // 6
remainder(27,5) // 2
