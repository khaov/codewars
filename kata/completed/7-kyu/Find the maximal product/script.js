// Solution:

function findMaxProduct(arr){
  return arr.map((_, currentIndex) =>
            arr.filter((_, followingIndex) => (followingIndex + 1) % (currentIndex + 1) === 0)
               .reduce((product, number) => product * number)
            )
            .sort((prev, next) => next - prev)[0];
}

// Sample Tests:

findMaxProduct([4, 0, -19])                 // 0
findMaxProduct([11, 6, -2, 0, 5, -4, 2])    // 8
findMaxProduct([8, -6, 4, 0, 4, 0, -5, 0])  // 4
findMaxProduct([4, 6, 8, 11, 13, 5, 7, 9])  // 8648640
