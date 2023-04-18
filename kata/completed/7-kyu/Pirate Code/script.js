// Solution:

function amaroPlan(pirateNum) {

  let piratesTreasure = new Array(pirateNum).fill(0);

  let piratesPartner = 0;

  piratesTreasure.forEach(function(pirate, order) {
    if(order % 2 === 0) {
      piratesPartner++
    }
  });

  piratesPartner = piratesPartner - 1

  return piratesTreasure.map((treasure, pirate) =>
      pirate === 0 ? treasure = (pirateNum * 20) - piratesPartner :
                     pirate % 2 === 0 ? treasure = 1 :
                                        treasure = 0
  );
}

// Sample Tests:

amaroPlan(2) // [40, 0]
amaroPlan(3) // [59, 0, 1]
amaroPlan(4) // [79, 0, 1, 0]
amaroPlan(5) // [98, 0, 1, 0, 1]
