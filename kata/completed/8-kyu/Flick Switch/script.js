// Solution:

function flickSwitch(arr) {
  let key = true;

  return arr.map(function(word) {
    if (word === "flick" && key === true) {
      key = false;
    } else if (word === "flick" && key === false) {
      key = true;
    }

    return key === true ? word = true : word = false;
  });
}

// Sample Tests:

flickSwitch(["codewars", "flick", "code", "wars"]) // [true, false, false, false]
flickSwitch(["flick", "chocolate", "adventure", "sunshine"]) // [false, false, false, false]
flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]) // [true, true, false, false, true]
flickSwitch(["flick", "flick", "flick", "flick", "flick"]) // [false, true, false, true, false]
flickSwitch(["bicycle"]) // [true]
flickSwitch(["flick"]) // [false]
flickSwitch([]) // []
