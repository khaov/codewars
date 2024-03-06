// Solution:

function sliding(nums, k) {
  let maximums = [];

  for (let i = 0; i < nums.length - k + 1; i++) {
    maximums.push(Math.max.apply(null, nums.slice(i, i + k)));
  }

  return maximums;
}

// Sample Tests:

sliding([1,3,-1,-3,5,3,6,7], 3);        // [3, 3, 5, 5, 6, 7]
sliding([-7, -8, 7, 5, 7, 1, 6, 0], 4); // [7, 7, 7, 7, 7]
sliding([7, 2, 4], 2);                  // [7, 4]
sliding([9, 11], 2);                    // [11]
sliding([9, 11, 12], 1);                // [9, 11, 12]
sliding([], 50);                        // []
sliding([-1,-2,-3], 3);                 // [-1]
sliding([-1,-2,-3], 1);                 // [-1,-2,-3]
