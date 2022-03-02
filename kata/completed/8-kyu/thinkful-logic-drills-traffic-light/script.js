// Solution:

function updateLight(current) {

  const colors = {
    "green" : "yellow",
    "yellow": "red",
    "red"   : "green"
  }

  return colors[current];
}

// Sample Tests:

updateLight("green")  // "yellow"
updateLight("yellow") // "red"
updateLight("red")    // "green"
