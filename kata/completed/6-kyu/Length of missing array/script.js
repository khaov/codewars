// Solution:

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays !== null) {
      if (arrayOfArrays.length > 0) {
        const lengths = (arrayOfArrays || []).map(array => array ? array.length : 0).sort((prev, next) => prev - next);

        if (!lengths.includes(0)){
          return lengths.filter((length, index, array) => length !== array[index + 1] - 1)[0] + 1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
}

// Sample Tests:

getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )                                                 // 3
getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] )                                              // 2
getLengthOfMissingArray([ [ null ], [ null, null, null ] ] )                                                                    // 2
getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ) // 5
getLengthOfMissingArray([ ])                                                                                                    // 0
getLengthOfMissingArray([ [], [2, 1], [2, 1, 0, 0, 3], [1, 2, 3], [3, 3, 2, 0] ])                                               // 3
getLengthOfMissingArray(null)                                                                                                   // 3
