// Solution:

function fixTheMeerkat(arr) {
  return arr.reverse();
}

// Sample Tests:

fixTheMeerkat(["tail", "body", "head"])               // ["head", "body", "tail"]
fixTheMeerkat(["tails", "body", "heads"])             // ["heads", "body", "tails"]
fixTheMeerkat(["bottom", "middle", "top"])            // ["top", "middle", "bottom"]
fixTheMeerkat(["lower legs", "torso", "upper legs"])  // ["upper legs", "torso", "lower legs"]
fixTheMeerkat(["ground", "rainbow", "sky"])           // ["sky", "rainbow", "ground"]
