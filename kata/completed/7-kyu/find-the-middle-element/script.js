// Solution:

function gimme (triplet) {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}

// Sample Tests:

gimme([2, 3, 1])          // 0
gimme([5, 10, 14])        // 1
gimme([2.1, 3.2, 1.4])    // 0
gimme([5.9, 10.4, 14.2])  // 1
gimme([-2, -3, -1])       // 0
gimme([-5, -10, -14])     // 1
gimme([-2, -3.2, 1])      // 0
gimme([-5.2, -10.6, 14])  // 0
