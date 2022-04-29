// Solution:

function myLanguages(results) {
  let languages = [];

  for (key in results) {
    if (results[key] >= 60) {
      languages.push(key)
    }
  }

  return languages.sort((a, b) => results[b] - results[a]);
}

// Sample Tests:

myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})  // ["Ruby", "Python"]
myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}) // ["Dutch", "Greek", "Hindi"]
myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20})   // []
