// Solution:

function cubeOdd(arr) {
  return arr.every(item => typeof item === 'number') ?
         arr.reduce((sum, num) => sum += Math.pow(num, 3) % 2 !== 0 ? Math.pow(num, 3) : 0, 0) :
         undefined
}

// Sample Tests:

cubeOdd([1, 2, 3, 4])       // 28
cubeOdd([-3,-2,2,3])        // 0
cubeOdd(["a",12,9,"z",42])  // undefined
