// Solution:

function sortIt(list, n) {
  return list.split(', ').sort((prev, next) => {
    const charCodeA = prev.toLowerCase().charCodeAt(n - 1);
    const charCodeB = next.toLowerCase().charCodeAt(n - 1);

    return charCodeA === charCodeB ? prev.localeCompare(next) : charCodeA - charCodeB;
  }).join(', ');
}

// Sample Tests:

sortIt('bill, bell, ball, bull', 2) // 'ball, bell, bill, bull'
sortIt('cat, dog, eel, bee', 3)     // 'bee, dog, eel, cat'
