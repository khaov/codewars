// Solution:

function findLongest(array){
  let longestLength = [...array].sort((a, b) => b - a)[0].toString().length;
  return array.filter(number => number.toString().length === longestLength)[0];
}

// Sample Tests:

findLongest([1, 10, 100])                 //  100
findLongest([9000, 8, 800])               //  9000
findLongest([8, 900, 500])                //  900
findLongest([8, 38130, 900, 51090, 500])  //  38130
