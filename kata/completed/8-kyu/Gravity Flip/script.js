// Solution:

const flip=(d, a)=>{
  return a.sort(function(a, b){
    if (d === 'R') {return a - b}
    if (d === 'L') {return b - a}
  })
}

// Sample Tests:

flip('R', [3, 2, 1, 2])     // [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5])  // [5, 5, 4, 3, 1]
