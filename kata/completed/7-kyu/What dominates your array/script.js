// Solution:

function dominator(arr) {
  const length = arr.length / 2;

  let repeat = {};
  let dominator = 0;

  arr.forEach(number => {
    repeat[number] = repeat[number] ? repeat[number] + 1 : 1
  });

  Object.keys(repeat).forEach(key => {
    if (repeat[key] > length) {
      dominator = Number(key);
    }
  });

  return dominator ? dominator : -1;
}

// Sample Tests:

dominator([3,4,3,2,3,1,3,3])  //  3
dominator([1,2,3,4,5])        // -1
dominator([1,1,1,2,2,2])      // -1
dominator([1,1,1,2,2,2,2])    //  2