// Solution:

function sumItUp(numbersWithBases) {
  return numbersWithBases.map(num => parseInt(num[0], num[1]))
                         .reduce((sum, num) => sum += num, 0);
}

// Sample Tests:

sumItUp([["101",2], ["10",8]])            // 13
sumItUp([["ABC",16], ["11",2]])           // 2751
sumItUp([["101",16],["7640",8],["1",9]])  // 4258
