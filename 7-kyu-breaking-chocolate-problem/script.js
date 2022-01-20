// Solution:

function breakChocolate(n,m) {
  if (n*m > 0) {
    return n*m-1;
  } else {
    return 0;
  }
}

// Sample Tests:

breakChocolate(5, 5) // 24
breakChocolate(3, 1) // 2
breakChocolate(2, 1) // 1
breakChocolate(1, 1) // 0