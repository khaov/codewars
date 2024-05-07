// Solution:

function doubleEveryOther(a) {
  return a.map((number, index) => index % 2 !== 0 ? number * 2 : number);
}

// Sample Tests:

doubleEveryOther([1,2,3,4]) // [1,4,3,8]
