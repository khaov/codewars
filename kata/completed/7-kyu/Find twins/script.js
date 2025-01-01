// Solution:

function elimination(arr) {
  const twin = arr.filter((number, index, array) =>
    index !== array.lastIndexOf(number)
  )[0];

  return twin ? twin : null;

// Sample Tests:

elimination([2,5,34,1,22,1])  // 1, "twins are 1s"
elimination([2,2,34,1,22])    // 2, "twins are 2s"
elimination([2,5,34,1,22])    // null, "There are no twins in the city"
