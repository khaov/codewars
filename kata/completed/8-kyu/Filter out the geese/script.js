// Solution:

function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter(bird => !geese.includes(bird))
};

// Sample Tests:


gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
// ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]

gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])
// []

