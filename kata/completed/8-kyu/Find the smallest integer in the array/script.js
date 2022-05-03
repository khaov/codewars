// Solution:

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}

// Sample Tests:

let sif = new SmallestIntegerFinder();

sif.findSmallestInt([78,56,232,12,8])     // 8,  'Should return the smallest int 8'
sif.findSmallestInt([78,56,232,12,18])    // 12, 'Should return the smallest int 12'
sif.findSmallestInt([78,56,232,412,228])  // 56, 'Should return the smallest int 56'
sif.findSmallestInt([78,56,232,12,0])     // 0,  'Should return the smallest int 0'
sif.findSmallestInt([1,56,232,12,8])      // 1,  'Should return the smallest int 1'
