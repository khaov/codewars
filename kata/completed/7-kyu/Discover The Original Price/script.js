// Solution:

function discoverOriginalPrice(discountedPrice, salePercentage) {
  return Number(((discountedPrice * 100) / (100 - salePercentage)).toFixed(2));
}

// Sample Tests:

discoverOriginalPrice(75,25)    // 100
discoverOriginalPrice(25,75)    // 100
discoverOriginalPrice(75.75,25) // 101
