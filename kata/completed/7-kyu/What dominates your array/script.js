// Solution:

function dominator(arr) {
  let repeat = [];

  const length = arr.length / 2;
  const unique = arr.filter((number, index, array) => index == array.lastIndexOf(number));

  unique.forEach(uniqueNumber =>
    repeat.push([uniqueNumber, arr.filter(number => number == uniqueNumber).length])
  );

  const dominator = repeat.find(repetition => repetition[1] > length);

  return dominator ? Number(dominator[0]) : -1;
}

// Sample Tests:

dominator([3,4,3,2,3,1,3,3])  //  3
dominator([1,2,3,4,5])        // -1
dominator([1,1,1,2,2,2])      // -1
dominator([1,1,1,2,2,2,2])    //  2