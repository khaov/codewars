// Solution:

function sectSort(array, start, length) {
  length === 0 ? length = undefined : length;
  const before = array.slice(0, start);
  const center = array.slice(start, (start + length) || array.length).sort((prev, next) => prev - next);
  let after
  length === undefined ? after = array.slice(start, start) : after = array.slice(start + length);

  return [...before,...center,...after];
}

// Sample Tests:

sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2)    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5) // [9, 7, 1, 2, 3, 4, 5, 8, 6]
