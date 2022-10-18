// Solution:

function dontGiveMeFive(start, end) {

  count = 0;

  for (let i = start; i <= end; i++) {
    if(!i.toString().split('').some(number => number === '5')) {
      count++
    }
  }

  return count;
}

// Sample Tests:

dontGiveMeFive(1,9)   // 8
dontGiveMeFive(4,17)  // 12
