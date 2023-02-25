// Solution:

function fuelPrice(litres, pricePerLitre) {
  const discountPerLiter = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
  const totalPrice = litres * (pricePerLitre - discountPerLiter);
  return Math.round(totalPrice * 100) / 100;
}

// Sample Tests:

fuelPrice(5, 1.23) // 5.65
fuelPrice(8, 2.5) // 18.40
fuelPrice(5, 5.6) // 27.50
