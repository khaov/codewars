// Solution:

function partlist(arr) {
  let partList = [];

  for (let i = 1; i < arr.length; i++) {
    partList.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
  }

  return partList;
}

// Sample Tests:

partlist(["I", "wish", "I", "hadn't", "come"])
// [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])

partlist(["cdIw", "tzIy", "xDu", "rThG"])
// [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])

partlist(["vJQ", "anj", "mQDq", "sOZ"])
// [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
