// Solution:

function dominator(arr) {
  let dominator = -1;
  let repeat = {};

  const length = arr.length / 2;
  const unique = arr.filter((number, index, array) => index == array.lastIndexOf(number))

  unique.forEach(uniqueNumber => repeat[uniqueNumber] = arr.filter(number => number == uniqueNumber).length);

  for (let key of Object.keys(repeat)) {
    if (repeat[key] > length) {
      dominator = Number(key);
      break;
    }
  }

  return dominator;
}

// Sample Tests:

dominator([3,4,3,2,3,1,3,3])  //  3
dominator([1,2,3,4,5])        // -1
dominator([1,1,1,2,2,2])      // -1
dominator([1,1,1,2,2,2,2])    //  2