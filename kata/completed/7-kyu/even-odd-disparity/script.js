// Solution:

function solve(a){
  let even = 0;
  let odd = 0;

  const numbers = a.filter(item => typeof item === 'number').forEach(number => number % 2 === 0 ? even++ : odd++);

  return even - odd;
};

// Sample Tests:

solve([0,1,2,3])  //  0
solve([0,1,2,3,'a','b'])  //  0
solve([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3])  //  0
solve([13, 6, 8, 15, 4, 8, 13]) //  1
solve([1,'a', 17, 8,'e', 3,'i', 12, 1])   //  -2
solve([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9]) //  2
