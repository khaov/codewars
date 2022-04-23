// Solution:

const closestMultiple10 = num => {
  if (num % 10 >= 5) {
    return num + (10 - num % 10)
  } else {
    return num - num % 10
  }
};

// Sample Tests:

closestMultiple10(54)   // 50
closestMultiple10(55)   // 60
closestMultiple10(2680) // 2690
