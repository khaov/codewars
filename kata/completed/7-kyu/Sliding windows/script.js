// Solution:

function window(length, offset, list) {
  let windows = [];

  for (let index = 0; index <= list.length; index += offset) {
    let window = list.slice(index, index + length);

    if (window.length === length) {
      windows.push(window);
    }
  }

  return windows;
}

// Sample Tests:

window(2,1,[0,1,2,3,4]) // [ [0,1], [1,2], [2,3], [3,4] ]
window(2,2,[0,1,2,3,4]) // [ [0,1], [2,3] ]
window(2,3,[0,1,2,3,4]) // [ [0,1], [3,4] ]

window(3,1,[0,1,2])     // [ [0,1,2] ]
window(2,1,[0,1,2])     // [ [0,1], [1,2] ]
window(1,1,[0,1,2])     // [ [0], [1], [2] ]
window(0,1,[0,1,2])     // [ [], [], [], [] ]
