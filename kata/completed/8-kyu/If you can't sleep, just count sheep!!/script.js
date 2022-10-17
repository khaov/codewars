// Solution:

var countSheep = function (num){
  let count = '';

  for (let i = 1; i <=num; i++) {
    count += `${i} sheep...`
  }

  return count;
}

// Sample Tests:

countSheep(0) // ""
countSheep(1) // "1 sheep..."
countSheep(2) // "1 sheep...2 sheep..."
countSheep(3) // "1 sheep...2 sheep...3 sheep..."
