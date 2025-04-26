// Solution:

function splitTheBill(x) {
  const friends = Object.keys(x).length;
  let bill = 0;

  for (key in x) {
    bill += x[key];
  }

  for (key in x) {
    x[key] = parseFloat((x[key] - bill / friends).toFixed(2));
  }

  return x;
}

// Sample Tests:

splitTheBill({A: 20, B: 15, C: 10}) // {A: 5, B: 0, C: -5}
splitTheBill({A: 40, B: 25, X: 10}) // {A: 15, B: 0, X: -15}
splitTheBill({"A": 40,"B": 25,"C": 10,"D": 153,"E": 58})