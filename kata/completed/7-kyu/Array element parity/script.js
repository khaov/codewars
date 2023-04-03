// Solution:

function solve(arr){
    return arr.find((number,index,array) => !array.includes(-number));
};

// Sample Tests:

solve([1,-1,2,-2,3])                            // 3
solve([-3,1,2,3,-1,-4,-2])                      // -4
solve([1,-1,2,-2,3,3])                          // 3
solve([-110,110,-38,-38,-62,62,-38,-38,-38])    // -38
solve([ -9,-105,-9,-9,-9,-9,105])               // -9