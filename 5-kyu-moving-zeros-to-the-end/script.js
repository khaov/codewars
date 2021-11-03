// Solution:

var moveZeros = function (arr) {
  const itemsArray = [];
  const zerosArray = [];
  arr.forEach(function (item) {
   if (item === 0){
    zerosArray.push(item);
   } else {
    itemsArray.push(item);
   }
  });
  return itemsArray.concat(zerosArray);
}

// Sample Tests:

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns [false,1,1,2,1,3,"a",0,0]