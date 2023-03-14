// Solution:

function getMinMax(arr) {
    return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
}

// Sample Tests:

getMinMax([1])      // [1,1]
getMinMax([1, 2])    // [1,2]
getMinMax([2, 1])    // [1,2]
