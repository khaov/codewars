// Solution:

function containAllRots(strng, arr) {
  for (var i = 0; i < strng.length; i++) {
    if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) {
      return false
    }
  }

  return true
}

// Sample Tests:

containAllRots("", []) // true
containAllRots("", ["bsjq", "qbsj"]) // true
containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) // true
containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]) // false