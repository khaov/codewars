// Solution:

function fit_in(a, b, m, n) {
  if (a > n || b > n || a > m || b > m) {
    return false;
  } else {
    return !(a + b > m && a + b > n);
  }
}

// Sample Tests:

fit_in(1,2,3,2) // true;
fit_in(1,2,2,1) // false;
fit_in(3,2,3,2) // false;
fit_in(1,2,1,2) // false;
fit_in(6,5,8,7) // false;
