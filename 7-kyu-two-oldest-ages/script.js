// Solution:

function twoOldestAges(ages){
  return ages.sort(function(a, b) {
     return b - a;
  }).splice(0, 2).reverse();
}

// Sample Tests:

twoOldestAges( [81, 28] )
twoOldestAges( [1, 2, 10, 8] )  // should return [8, 10]
twoOldestAges( [1,5,87,45,8,8]) // should return [45, 87]
twoOldestAges( [6,5,83,5,3,18]) // should return [18, 83]
