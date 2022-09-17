// Solution:

function binaryPyramid(m,n){
  let binarySum = 0;

  for (let i = m; i <= n; i++) {
    binarySum += Number(i.toString(2));
  }

  return binarySum.toString(2);
}

// Sample Tests:

binaryPyramid(1,4)    //  "1111010"
binaryPyramid(1,6)    //  "101001101"
binaryPyramid(6,20)   //  "1110010110100011"
binaryPyramid(21,60)  //  "1100000100010001010100"
