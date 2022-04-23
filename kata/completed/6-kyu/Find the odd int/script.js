// Solution:

function findOdd(A) {
  return A.filter(function(number){
    let repetition = 0;
    A.forEach(function(duplicate){
      if (number === duplicate){
        repetition++
      }
    });
    if (repetition % 2 !== 0) {
      return number
    }
  })[0];
}

// Sample Tests:

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])  //  5
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])                 //  -1
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])              //  5
findOdd([10])                                       //  10
findOdd([1,1,1,1,1,1,10,1,1,1,1])                   //  10
findOdd([5,4,3,2,1,5,4,3,2,10,10])                  //  1
