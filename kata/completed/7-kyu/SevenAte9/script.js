// Solution:

function sevenAte9(str) {
  let array = str.split('');

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] === '7' && array[i] === '9' && array[i + 1] === '7') {
      array.splice(i, 1);
    }
  }

  return array.join('');
}

// Sample Tests:

sevenAte9('797') // '77'
sevenAte9('7979797') // '7777'
sevenAte9('165561786121789797') // '16556178612178977'
