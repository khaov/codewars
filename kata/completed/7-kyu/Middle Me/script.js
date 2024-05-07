// Solution:

function middleMe(N, X, Y){
  return Y.repeat(N).length % 2 === 0 ?
         Y.repeat(N).slice(0, Y.repeat(N).length / 2) +
         X +
         Y.repeat(N).slice(Y.repeat(N).length / 2, Y.repeat(N).length):
         X;
}

// Sample Tests:

middleMe(18, 'z', '#') // '#########z#########'
middleMe(19, 'z', '#') // 'z'
