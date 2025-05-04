// Solution:

function top3(products, amounts, prices) {
  let revenues = {};

  products.forEach((product, index) => revenues[product] = amounts[index] * prices[index]);

  return products.sort((prev, next) => revenues[next] - revenues[prev]).splice(0, 3);
}

// Sample Tests:

top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399]); // ["Cell Phones", "Vacuum Cleaner", "Computer"]

top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124]); // ['Vacuum Cleaner', 'Gold', ' Speakers']

top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [0, 12, 24, 17, 19, 23, 120, 8], [9, 24, 29, 31, 51, 8, 120, 14]); // ['Lego', 'Gold', 'Computer']
