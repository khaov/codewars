// Solution:

var humanYearsCatYearsDogYears = function(humanYears) {
  let CatYears = 15;
  let DogYears = 15;
  if(humanYears >=2) {
    CatYears += 9 + 4 * (humanYears - 2);
    DogYears += 9 + 5 * (humanYears - 2);
  }
  return [humanYears,CatYears,DogYears];
}

// Sample Tests:

humanYearsCatYearsDogYears(1)   // [1,15,15]
humanYearsCatYearsDogYears(2)   // [2,24,24]
humanYearsCatYearsDogYears(10)  // [10,56,64]
