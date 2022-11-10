// Solution:

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}

// Sample Tests:

mango(3, 3) // 6
mango(9, 5) // 30
