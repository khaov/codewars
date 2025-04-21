// Solution:

function dominator(arr) {
  const length = arr.length / 2;

  const repeation = Object.entries(arr.reduce((acc, value) => ({ ...acc, [value]: (acc[value] || 0) + 1 }), {}));
  const dominator = repeation.find(([_, value]) => value > length);

  return dominator ? Number(dominator[0]) : -1;
}

// Sample Tests:

dominator([3,4,3,2,3,1,3,3])  //  3
dominator([1,2,3,4,5])        // -1
dominator([1,1,1,2,2,2])      // -1
dominator([1,1,1,2,2,2,2])    //  2