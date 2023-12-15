// Solution:

function checkThreeAndTwo(array) {
  function filterStrings(str, arr) {
    return arr.filter(s => s === str).length;
  }

  const strings = [];

  strings.push(filterStrings("a", array), filterStrings("b", array), filterStrings("c", array));

  return strings.includes(3) && strings.includes(2);
}

// Sample Tests:

checkThreeAndTwo(["a", "a", "a", "b", "b"]) // true
checkThreeAndTwo(["a", "c", "a", "c", "b"]) // false
checkThreeAndTwo(["a", "a", "a", "a", "a"]) // false
