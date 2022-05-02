// Solution:

function Xbonacci(signature,n){
  let xbonacciArray = [...signature];

  if (n > signature.length) {
    for(let i = signature.length; i < n; i++) {
      let xbonacciNumber = 0;
  
      for(let j = signature.length; j >= 1; j--) {
        xbonacciNumber += xbonacciArray[i - j];
      }
  
      xbonacciArray.push(xbonacciNumber);
    }
    return xbonacciArray
  } else {
    return xbonacciArray.slice(0, n);
  }
}

// Sample Tests:

Xbonacci([0,1],10)                  //  [0,1,1,2,3,5,8,13,21,34]
Xbonacci([1,1],10)                  //  [1,1,2,3,5,8,13,21,34,55]
Xbonacci([0,0,0,0,1],10)            //  [0,0,0,0,1,1,2,4,8,16]
Xbonacci([1,0,0,0,0,0,1],10)        //  [1,0,0,0,0,0,1,2,3,6]
Xbonacci([1,0,0,0,0,0,0,0,0,0],20)  //  [1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]
