// Solution:

function mxdiflg(a1, a2) {
  if (a1.length && a2.length) {
    let differenceArray = [];

    a1.forEach(function(item1) {
      a2.forEach(function(item2) {
        differenceArray.push(Math.abs(item1.length - item2.length))
      });
    });

    return differenceArray.reduce(function(max, item) {
      return max > item ? max : item
    });
  } else {
    return -1;
  }
}

// Sample Tests:

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
mxdiflg(s1, s2) // 13
