// Solution:

function mean(lst) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const integers = lst.filter(item => !alphabet.includes(item))
                      .reduce((sum, num) => sum += Number(num), 0) / 10;

  const characters = lst.filter(item => alphabet.includes(item)).join('')

  return [integers, characters];
}

// Sample Tests:

mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]); // [3.6, "udiwstagwo"]
mean(["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"]); // [3.0, "cxwyvuhinu"]
mean(["0", "u", "a", "y", "0", "a", "9", "q", "3", "v", "g", "7", "6", "4", "y", "d", "8", "6", "0", "d"]); // [4.3, "uayaqvgydd"]
mean(["s", "n", "9", "l", "0", "m", "i", "z", "9", "7", "y", "4", "z", "3", "3", "k", "4", "1", "0", "k"]); // [4.0, "snlmizyzkk"]
mean(["5", "v", "u", "k", "8", "4", "9", "b", "9", "g", "5", "z", "3", "f", "6", "u", "i", "6", "6", "t"]); // [6.1, "vukbgzfuit"]
mean(["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"]); // [0.9, "aaddgquvyy"]
mean(["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"]); // [1.0, "aaddgquvyy"]
