// Solution:

function findUnique(numbers) {
  
  const sorted = [...numbers].sort()
  
  if(sorted[0] !== sorted[1]) return sorted[0]
  
  if(sorted[sorted.length - 1] !== sorted[sorted.length - 2]) return sorted[sorted.length - 1]
  
  for(let i = 0; i < sorted.length; i++){
    if(sorted[i] !== sorted[i - 1] && sorted[i] !== sorted[i + 1]) return sorted[i]
  }


  // Repetition solution

  // return numbers.filter(function(number){
  //   let repetition = 0;

  //   numbers.forEach(function(duplicate){
  //     if (number === duplicate){
  //       repetition++
  //     }
  //   });

  //   if (repetition % 2 !== 0) {
  //     return number
  //   }
  // })[0];


  /* Recursion solution */

  // let sortedNumbers = numbers.sort((prev, next) => prev - next);

  // if ( sortedNumbers.indexOf(sortedNumbers[0]) !== sortedNumbers.lastIndexOf(sortedNumbers[0])) {
  //   const slicedNumbers = sortedNumbers.slice(sortedNumbers.lastIndexOf(sortedNumbers[0]) + 1);

  //   return findUnique(slicedNumbers);
  // } else {
  //   return sortedNumbers[0];
  // }
}

// Sample Tests:

findUnique([1, 8, 4, 4, 6, 1, 8])         // 6
findUnique([ 1234567 ])                   // 1234567
findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]) // 1
findUnique([ 2, 2, 5, 5, 4, 3, 3, 1, 1 ]) // 4
findUnique([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ]) // 9
