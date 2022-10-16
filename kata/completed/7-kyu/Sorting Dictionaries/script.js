// Solution:

function sortDict(dict) {
  let sortedDictionary = [];

  for (key in dict) {
    sortedDictionary.push([+key || key, dict[key]]);
  }

  return sortedDictionary.sort((prev, next) => next[1] - prev[1]);
}

// Sample Tests:

// Should handle dictionaries with numbers as keys

sortDict({1:3,2:2,3:1})           // [[1,3],[2,2],[3,1]]
sortDict({3:1,2:2,1:3})           // [[1,3],[2,2],[3,1]]
sortDict({1:2,2:4,3:6})           // [[3,6],[2,4],[1,2]]
sortDict({1:5,3:10,2:2,6:3,8:8})  // [[3,10],[8,8],[1,5],[6,3],[2,2]]

// Should handle dictionaries with strings as keys

sortDict({'a':6,'b':2,'c':4})           // [['a',6],['c',4],['b',2]]
sortDict({'aldo':6,'boris':2,'igor':6}) // [['aldo',6],['igor',6],['boris',2]]
