// Solution:

function args_count() {
  return arguments.length;
}

// Sample Tests:

args_count(1, 2)            // 2
args_count()                // 0
args_count('A', 'B', 'C')   // 3
args_count(["foo", "bar"])  // 1
