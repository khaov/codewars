// Solution:

function findNb(m) {
  let n = 0;
  while (m > 0) {
    n++;
    m -= Math.pow(n, 3);
  }
  return (m === 0) ? n : -1;
}

// Sample Tests:

findNb(1071225)         // 45
findNb(91716553919377)  // -1
findNb(4183059834009)   // 2022
findNb(24723578342962)  // -1
findNb(135440716410000) // 4824
findNb(40539911473216)  // 3568
