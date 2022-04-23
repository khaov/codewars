// Solution:

function getSize(width, height, depth) {
  let area = width * height * 2 + width * depth * 2 + height * depth * 2;
  let volume = width * height * depth;
  return [area, volume];
}

// Sample Tests:

getSize(4, 2, 6)    // [88, 48]
getSize(10, 10, 10) // [600, 1000]
