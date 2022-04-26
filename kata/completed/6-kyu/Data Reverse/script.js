// Solution:

function dataReverse(data) {
  let reversedData = [];
  let reversedBytes = [];

  let bytesAmount = data.length / 8;

  for (let i = 1; i <= bytesAmount; i++) {
    let byte = [];
    for (let j = 1; j <= 8; j++) {
      byte.push(data.pop());
    }
    reversedBytes.push(byte.reverse())
  }

  reversedBytes.forEach(function(byte) {
    byte.forEach(function(bit){
      reversedData.push(bit)
    });
  });

  return reversedData;
}

// Sample Tests:

dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])
