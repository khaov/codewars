// Solution:

function wave(str){
  let wave = [];

  for (let i = 0; i <= str.length-1; i++) {
    if (str[i] === " ") {
      continue;
    } else {
      convertedString = str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1);
      wave.push(convertedString);
    }
  }

  return wave;
}

// Sample Tests:

wave("hello")     // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
wave("two words") // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
