// Solution:

function nearestSq(n){
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}

// Sample Tests:

nearestSq(1)    //  1
nearestSq(2)    //  1
nearestSq(10)   //  9
nearestSq(111)  //  121
nearestSq(9999) //  10000
