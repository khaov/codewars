// Solution:

function reverseBits (n) {
    return parseInt(n.toString(2).split('').reverse().join(''), 2);
}

// Sample Tests:

reverseBits(417)                     // 267
reverseBits(267)                     // 417
reverseBits(0)                       // 0
reverseBits(2017)                    // 1087
reverseBits(1023)                    // 1023
reverseBits(1024)                    // 1
reverseBits(Number.MAX_SAFE_INTEGER) // Number.MAX_SAFE_INTEGER
