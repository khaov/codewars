// Solution:

function compoundArray(a, b) {
  let length = 0;
  let compound = [];

  a.length >= b.length ?
  length = a.length :
  length = b.length

  for (let i = 0; i < length; i++) {
    if (a[i] >= 0) { compound.push(a[i]) }
    if (b[i] >= 0) { compound.push(b[i]) }
  }

  return compound;
}

// Sample Tests:

compoundArray([11, 12], [21, 22, 23, 24]) // [11, 21, 12, 22, 23, 24]
compoundArray([2147483647,2147483646,2147483645,2147483644,2147483643], [9]) // [2147483647,9,2147483646,2147483645,2147483644,2147483643]
compoundArray([214,215,216,217,218], []) // [214,215,216,217,218]
compoundArray([], [314,315,316,317,318]) // [314,315,316,317,318]
