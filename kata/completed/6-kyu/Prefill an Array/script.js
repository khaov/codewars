// Solution:

function prefill(n, v) {
  if (parseInt(n) !== Math.abs(n)) {
    throw new TypeError(`${n} is invalid`);
  } else {
    return +n ? Array(n).fill(v) : [];
  }
}

// Sample Tests:

prefill(3,1)                // [1,1,1]
prefill(2,'abc')            // ['abc','abc']
prefill('1',1)              // [1]
prefill(3, prefill(2,'2d')) // [['2d','2d'],['2d','2d'],['2d','2d']]
