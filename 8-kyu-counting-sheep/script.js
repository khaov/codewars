var array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

// Solutions:

// Filter method:

// function countSheeps(arrayOfSheep) {
//   const numberOfSheep = arrayOfSheep.filter(function (item) {
//     return item;
//   });
//   return numberOfSheep.length;
// }

// Reduce method:

function countSheeps(arrayOfSheep) {
  return numberOfSheep = arrayOfSheep.reduce(function (prev, item) {
    if (typeof item !== 'null' && typeof item !== 'undefined') {
      return prev + item;
    } else {
      return prev;
    }
  });
}

// Sample Tests:

countSheeps(array1) // 17
