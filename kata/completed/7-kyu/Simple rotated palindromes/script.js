// Solution:

function solve(st){
  let rotation = st;

  for (let i = 0; i < st.length - 1; i++) {
    rotation = rotation.slice(st.length - 1) + rotation.slice(0, st.length - 1);

    if (rotation === rotation.split('').reverse().join('')) {
      return true;
    }
  }

  return false;
}

// Sample Tests:

solve("aaab")                               // false
solve("abcabc")                             // false
solve("4455")                               // true
solve("zazcbaabc")                          // true
solve("223456776543")                       // true
solve("432612345665")                       // false
solve("qponmlkjihgfeeiefghijklmnopqrsttsr") // false
