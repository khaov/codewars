// Solution:

function digitize(n) {
  return n.toString().split('').map(function(item){
    return Number(item)
  }).reverse();
}

// Sample Tests:

digitize(35231)   // [1,3,2,5,3]
digitize(0)       // [0]
digitize(348597)  // [7,9,5,8,4,3]
