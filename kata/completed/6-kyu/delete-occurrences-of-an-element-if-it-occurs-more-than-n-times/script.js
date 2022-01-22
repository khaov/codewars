// Solution:

function deleteNth(arr,n){
  resultArray = [];
  arr.forEach(function(number, index, array) {
    let numberCount = 0;
    for (let i = 0; i <= index; i++) {
      if (array[i] === number) {
        numberCount ++
      }
    }
    if (numberCount <= n) {
      resultArray.push(number);
    }
  });
  return resultArray;
}

// Sample Tests:

deleteNth([20,37,20,21], 1)       // [20,37,21])
deleteNth([1,1,3,3,7,2,2,2,2], 3) // [1, 1, 3, 3, 7, 2, 2, 2])
deleteNth ([1,2,3,1,2,1,2,3],2)   // [1,2,3,1,2,3]
deleteNth ([1,1,1,1],2)           // [1,1]
