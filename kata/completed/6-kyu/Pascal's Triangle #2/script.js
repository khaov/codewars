// Solution:

function pascal(depth) {
  let triangle = [];

  for (let level = 1; level <= depth; level++) {
    let sequence = [];

    for (let item = 0; item < level; item++) {
      sequence.push(item == 0 || item == level - 1 ? 1 : triangle[level - 2][item - 1] + triangle[level - 2][item]);
    }

    triangle.push(sequence);
  }

  return triangle;
}

// Sample Tests:

pascal(1) // [[1]]
pascal(5) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
