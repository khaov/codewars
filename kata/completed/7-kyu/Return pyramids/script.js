// Solution:

function pyramid(n) {
  let pyramid = [];
  let i = 0

  for (i; i < n - 1; i++) {
    let floor = ' '.repeat(n - i - 1) + '/' + ' '.repeat(i) + ' '.repeat(i) + '\\';
    pyramid.push(floor);
  }

  let floor = '/' + '_'.repeat(i) + '_'.repeat(i) + '\\' + '\n';
  pyramid.push(floor);

  return pyramid.join('\n');
}

// Sample Tests:

pyramid(1)  //   "/\\\n"
pyramid(2)  //   " /\\\n/__\\\n"
pyramid(4)  //   "   /\\\n  /  \\\n /    \\\n/______\\\n"
pyramid(6)  //   "     /\\\n    /  \\\n   /    \\\n  /      \\\n /        \\\n/__________\\\n"
pyramid(10) //  "         /\\\n        /  \\\n       /    \\\n      /      \\\n     /        \\\n    /          \\\n   /            \\\n  /              \\\n /                \\\n/__________________\\\n"
