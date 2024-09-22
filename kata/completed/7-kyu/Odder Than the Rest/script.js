// Solution:

function oddOne(arr) {
  const oddNumber = arr.filter((number) => Math. abs(number) % 2 === 1)[0];
  return oddNumber ? arr.indexOf(oddNumber) : -1
}

// Sample Tests:

oddOne([2,4,6,7,10])            // 3
oddOne([2,16,98,10,13,78])      // 4
oddOne([4,-8,98,-12,-7,90,100]) // 4
oddOne([2,4,6,8])               // -1
