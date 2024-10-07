// Solution:

var hotpo = function(n){
  if (n > 0) {
    let counter = 0;

    while (n !== 1) {
      n % 2 == 0 ? n = n / 2 : n = 3 * n + 1;
      counter++;
    }

    return counter;
  } else {
    return 0;
  }
}

// Sample Tests:

hotpo(0)  // 0
hotpo(1)  // 0
hotpo(5)  // 5
hotpo(6)  // 8
hotpo(23) // 15
