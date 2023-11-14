// Solution:

function mostFrequentItemCount(collection) {
  collection.sort((prev, next) => prev -next);

  if (collection.length > 0) {
    let counter = 1;
    let maximum = 1;

    for (let index = 1; index < collection.length; index++) {
      if (collection[index] === collection[index - 1]) {
          counter++;
      } else {
          counter = 1;
      }
      if (counter > maximum) {
        maximum = counter;
      }
    }

    return maximum;
  } else {
    return 0;
  }
}

// Sample Tests:

mostFrequentItemCount([9])                                          // 0
mostFrequentItemCount([])                                           // 0
mostFrequentItemCount([3, -1, -1])                                  // 2
mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]) // 5
