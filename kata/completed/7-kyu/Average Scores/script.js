// Solution:

function average(scores) {
  return Math.round(scores.reduce((sum, num) => sum += num, 0) / scores.length);
}

// Sample Tests:

average([49,3,5,300,7])           // 73
average([90,98,89,100,100,86,94]) // 94
