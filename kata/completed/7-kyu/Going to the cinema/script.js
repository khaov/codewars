// Solution:

function movie(card, ticket, perc) {
  let numberOfVisits = 0;

  let priceOfSystemA = 0;
  let priceOfSystemB = card;

  while (Math.ceil(priceOfSystemB) >= priceOfSystemA) {
    numberOfVisits++;

    priceOfSystemA += ticket;
    priceOfSystemB += ticket * Math.pow(perc, numberOfVisits);
  }

  return numberOfVisits;
};

// Sample Tests:

movie(500, 15, 0.9)   // 43
movie(100, 10, 0.95)  // 24
