// Solution:

function solve(a,b){
  // let result = [];

  // b.forEach(function(secondArrayElement){
  //   if (a.includes(secondArrayElement)) {
  //     let counter = 0;

  //     a.forEach(function(firstArrayElement){
  //       if (firstArrayElement === secondArrayElement) {
  //         counter ++
  //       }
  //     });

  //     result.push(counter);
  //   } else {
  //     result.push(0);
  //   }
  // });

  // return result

  return b.map(n => a.filter(m => m === n).length);
}

// Sample Tests:

solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap'])           // [2, 1, 0]
solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz'])           // [2, 1, 2]
solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox'])  // [2, 0, 1]
