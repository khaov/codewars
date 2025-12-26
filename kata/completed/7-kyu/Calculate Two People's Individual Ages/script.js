// Solution:

function getAges(sum, difference){
  const junior = (sum - difference) / 2;
  const senior = junior + difference;

  if (sum < 0 || difference < 0) {
    return null;
  } else if (junior < 0 || senior < 0) {
    return null;
  } else {
    return [senior, junior];
  }
};

// Sample Tests:

getAges(24,4)   // [14,10]
getAges(63,-14) // null
