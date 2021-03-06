// Solution:

function descendingOrder(n){
  return Number(n.toString().split('').sort((prev, next) => next - prev).join(''))
}

// Sample Tests:

descendingOrder(0)          // 0
descendingOrder(1)          // 1
descendingOrder(111)        // 111
descendingOrder(15)         // 51
descendingOrder(1021)       // 2110
descendingOrder(123456789)  // 987654321
