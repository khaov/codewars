// Solution:

function nbYear(p0, percent, aug, p) {
  let population = p0;
  let years = 0;

  while (population < p) {
    years++
    population += (population * (percent/ 100)) + aug | 0;
  }

  return years;
}

// Sample Tests:

nbYear(1500, 5, 100, 5000)            // 15
nbYear(1500000, 2.5, 10000, 2000000)  // 10
nbYear(1500000, 0.25, 1000, 2000000)  // 94
