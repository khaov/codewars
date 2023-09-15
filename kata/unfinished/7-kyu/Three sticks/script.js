// Solution:

function maxlen(l1, l2) {
  let bigger = 0;
  let smaller = 0;

  if (l1 > l2) {
    bigger = l1;
    smaller = l2;
  } else {
    bigger = l2;
    smaller = l1;
  }

  let dif = bigger - smaller
}

// Sample Tests:

maxlen(5, 12) // 5
maxlen(12, 5) // 5

maxlen(5, 17) // 5.666666666666667
