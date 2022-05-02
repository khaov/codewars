// Solution:

function cookingTime(eggs) {
  return 5 * Math.ceil(eggs / 8);
}

// Sample Tests:

cookingTime(0)  //  0, '0 eggs'
cookingTime(5)  //  5, '5 eggs'
cookingTime(10) //  10, '10 eggs
