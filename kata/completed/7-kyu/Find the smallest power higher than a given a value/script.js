// Solution:

function findNextPower(val, pow_) {
  if (val === 1) {
    return Math.pow(2, pow_);
  } else {
    for (let i = 0; i <= val; i++) {
      let pow = Math.pow(i, pow_);
      if (pow > val) {
        return pow;
      }
    }
  }
}

// Sample Tests:

findNextPower(1, 8)       // 256
findNextPower(8, 3)       // 27
findNextPower(12385, 3)   // 13824
findNextPower(1245678, 5) // 1419857
findNextPower(1245678, 6) // 1771561
findNextPower(4782969, 7) // 10000000
