// Solution:

function sumCubes(n){
  let cubesSum = 0;

  for (let i =1; i <= n; i++) {
    cubesSum = cubesSum + Math.pow(i, 3)
  }

  return cubesSum;
}

// Sample Tests:

sumCubes(1)   //  1
sumCubes(2)   //  9
sumCubes(3)   //  36
sumCubes(4)   //  100
sumCubes(10)  //  3025
sumCubes(123) //  58155876
