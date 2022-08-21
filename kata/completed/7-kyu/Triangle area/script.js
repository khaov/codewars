// Solution:

function tArea(tStr) {
  const triangle = tStr.split('\n');

  const a =triangle[triangle.length - 2].split(' ').length - 1;
  const b = triangle.length - 3;

  return a * b / 2;
}

// Sample Tests:

tArea('\n.\n. .\n') // 0.5
tArea('\n.\n. .\n. . .\n') // 2
tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n') // 8
tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n') // 32
