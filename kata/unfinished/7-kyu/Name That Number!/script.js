// Solution:

function nameThatNumber(x) {
  const tens = {2:"twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety"};
  const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  switch (true) {
    case (x === 0):
      return 'zero';
      break;
    case (0 < x && x < 20):
      return units[x];
      break;
    case (x >= 20):
      return `${tens[Number(x.toString().split('')[0])]} ${units[Number(x.toString().split('')[1])]}`;
      break;
  }
}

// Sample Tests:

nameThatNumber(4)  // "four"
nameThatNumber(19) // "nineteen"
nameThatNumber(99) // "ninety nine"