// Solution:

function testit(a,b){
  a.toString(2);
  b.toString(2);

  return a | b;
}

// Sample Tests:


testit(0,1)   // 1
testit(1,2)   // 3
testit(10,20) // 30

testit(1,1)   // 1
testit(1,3)   // 3
