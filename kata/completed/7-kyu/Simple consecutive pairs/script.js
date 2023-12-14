// Solution:

function pairs(ar){
  let counter = 0;

  for (let i = 0; i < ar.length; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) {
      counter++
    }
  }

  return counter;
};

// Sample Tests:

pairs([1,2,5,8,-4,-3,7,6,5])                      // 3
pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]) // 2
pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])     // 0
pairs([-55, -56, -7, -6, 56, 55, 63, 62])         // 4
pairs([73, 72, 8, 9, 73, 72])                     // 3
