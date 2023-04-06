// Solution:

function converter (mpg) {
  return Number((mpg * 1.609344 / 4.54609188).toFixed(2));
}

// Sample Tests:

converter(10) // 3.54
converter(20) // 7.08
converter(30) // 10.62
