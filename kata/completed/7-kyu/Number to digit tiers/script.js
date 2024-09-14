// Solution:

function createArrayOfTiers(num) {
  const sourceArray = num.toString().split('');
  let tiersArray = [];
  let currentTier = "";

  for (let i = 0; i < sourceArray.length; i++) {
    currentTier = currentTier + sourceArray[i];
    tiersArray.push(currentTier);
  }

  return tiersArray;
}

// Sample Tests:

createArrayOfTiers(420)   // ["4", "42", "420"]
createArrayOfTiers(2017)  // ["2", "20", "201", "2017"]
