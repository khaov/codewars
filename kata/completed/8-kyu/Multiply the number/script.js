// Solution:

function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}

// Sample Tests:

multiply(10)  //250
multiply(5)   //25
multiply(200) //25000
multiply(0)   //0
multiply(-2)  //-10
