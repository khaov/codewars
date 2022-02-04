// Solution:

function sortByBit(array) {

  const sortedArray = array.sort();
  let lastIndex = sortedArray[array.length-1]

  let binaryArray = []

  for (let i=0; i <= lastIndex; i++){
    
  }


  // let binaryArray = new Array(lastIndex);

  // return binaryArray.forEach(function(item, index, array) {
  //   if (index === sortedArray[index]) {
  //     binaryArray.posh(1)
  //   } else {
  //     binaryArray.posh(0)
  //   }
  // })


  // for (let i=0; i <= binaryArray; i++){
  //   if (sortedArray[i] || sortedArray[i] === sortedArray[i+1] - 1){
  //     paddedArray.push(1)

  //   } else {
  //     paddedArray.push(0)
  //   }
  // }

  // paddedArray

  // for (let i=0; i <= lastIndex; i++){
  //   if (i === paddedArray[i]){
  //     binaryArray.push(1)
  //   } else {
  //     binaryArray.push(0)
  //   }
  // }

  // return parseInt(binaryArray.reverse().join(''), 2);

}

// Sample Tests:

// sortByBit([1, 2, 0, 4]) // 23
// sortByBit([])           // 0
// sortByBit([0])          // 1
// sortByBit([0, 1])       // 3
// sortByBit([1, 0])       // 3
sortByBit([30, 0])      // 1073741825
