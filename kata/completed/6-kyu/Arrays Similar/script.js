// Solution:

function arraysSimilar(arr1, arr2) {

  function arraySort(arr) {
    return arr.sort((prev, next) => Number(prev) - Number(next));
  }

  if (arr1.length === arr2.length) {
    return arraySort(arr1).every((item, index) => item === arraySort(arr2)[index])
  } else {
    return false;
  }

}

// Sample Tests:

// arraysSimilar([1, 2, 2, 3, 4], [2, 1, 2, 4, 3])
// arraysSimilar([2, 1, 2, 4, 3], [1, 2, 3, 4])
// arraysSimilar([1, 2, 3, 4], [1, 2, 3, "4"])
arraysSimilar([1, 1, 2], [4, 3, 2, 1, 1])
