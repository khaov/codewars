// Solution:

const intDiff = (arr, n) => {

  let counter = 0;

  arr.forEach(function(number, index, array){
    for (let i = 0; i <= array.length-1; i++) {
      if (index !== i && Math.abs(number - array[i]) === n){
        counter ++
      }
    }
  });

  return counter / 2

}

// Sample Tests:

intDiff([1, 1, 5, 6, 9, 16, 27], 4) // 3
intDiff([1, 1, 3, 3], 2) // 4
