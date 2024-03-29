// Solution:

function pipeFix(numbers) {
  let pipes = [];

  for (let pipe = numbers[0]; pipe <= numbers[numbers.length - 1]; pipe ++) {
    pipes.push(pipe);
  }

  return pipes;
}

// Sample Tests:

pipeFix([1,2,3,5,6,8,9])  // [1,2,3,4,5,6,7,8,9]
pipeFix([1,2,3,12])       // [1,2,3,4,5,6,7,8,9,10,11,12]
pipeFix([6,9])            // [6,7,8,9]
pipeFix([-1,4])           // [-1,0,1,2,3,4]
pipeFix([1,2,3])          // [1,2,3]
