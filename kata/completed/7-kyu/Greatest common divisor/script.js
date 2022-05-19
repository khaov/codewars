// Solution:

function mygcd(x,y){
  return y === 0 ? x : mygcd(y, x % y);
}

// Sample Tests:

mygcd(30,12)  // 6
mygcd(8,9)    // 1
mygcd(1,1)    // 1
