// Solution:

function parse(data) {
  let value = 0;
  let output = [];
  data.split('').forEach(function(command){
    switch (command) {
      case "i": value++;                    break;
      case "d": value--;                    break;
      case "s": value = Math.pow(value, 2); break;
      case "o": output.push(value);         break;
    }
  });
  return output;
}

// Sample Tests:

parse("iiisdoso")     // [ 8, 64 ]
parse("iiisxxxdoso")  // [ 8, 64 ]
