// Solution:

function zipWith(fn,a0,a1) {
  let pairsResult = [];
  const pairsNumber  = a0.length <= a1.length ? a0.length : a1.length;

  for (let i = 0; i < pairsNumber; i++) {
    pairsResult.push(fn(a0[i], a1[i]));
  }

  return pairsResult;
}

// Sample Tests:

const plus = (a,b) => a+b ;

// "Example tests"

zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2,1]); // [6,6,6,6,6,6]
zipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1]); // [6,6,6,6,6  ]
zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2  ]); // [6,6,6,6,6  ]

// "Description tests"

zipWith( Math.pow, [10,10,10,10], [0,1,2,3] );                  // [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] );              // [4,7,7,4,7,7]
zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] ); // [0,2,4,6]
zipWith( (a,b) => a+b, [0,1,2,3], [0,1,2,3] );                  // [0,2,4,6]
