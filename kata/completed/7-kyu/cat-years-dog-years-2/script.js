// Solution:

var ownedCatAndDog = function(catYears, dogYears) {
  catYearsToHuman = 0;
  dogYearsToHuman = 0;

  if (catYears >= 15 && catYears < 24) {
    catYearsToHuman = 1;
  } else if (catYears >= 24) {
    catYearsToHuman += Math.floor(2 + (catYears - 24) / 4);
  }

  if (dogYears >= 15 && dogYears < 24) {
    dogYearsToHuman = 1;
  } else if (dogYears >= 24)  {
    dogYearsToHuman += Math.floor(2 + (dogYears - 24) / 5);
  }

  return [catYearsToHuman, dogYearsToHuman];
}

// Sample Tests:

ownedCatAndDog(15,15) // [1,1]
ownedCatAndDog(24,24) // [2,2]
ownedCatAndDog(56,64) // [10,10]
