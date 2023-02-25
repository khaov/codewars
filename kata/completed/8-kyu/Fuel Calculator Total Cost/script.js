// Solution:

function fuelPrice(litres, pricePerLitre) {

  let discountPerLiter = 0;

  if (litres >= 2) {
    const discountIncrease = Math.floor(litres / 2);
  }



  const finalPrice = pricePerLitre * 100 -  litres * discountPerLiter;

  return (litres * finalPrice) / 100;
}

// Sample Tests:

fuelPrice(5, 1.23) // 5.65
fuelPrice(8, 2.5) // 18.40
fuelPrice(5, 5.6) // 27.50
