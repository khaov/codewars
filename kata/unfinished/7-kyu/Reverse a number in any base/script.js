// Solution:

function reverseNumber(n, b) {
    const base = b > 1 ? n.toString(b).split('').reverse().join('') : '1'.repeat(b)
    return parseInt(base, 2)
}

// Sample Tests:

reverseNumber(12, 2)    // 3
reverseNumber(12n, 2)   // 3

reverseNumber(3, 4)    // 4
reverseNumber(10, 5)    // 2

reverseNumber(45, 30)   // 451

reverseNumber(5, 1)     // 5
