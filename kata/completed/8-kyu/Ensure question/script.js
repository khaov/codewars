// Solution:

function ensureQuestion(s) {
  return s.endsWith('?') ? s : s + '?'
}

// Sample Tests:

ensureQuestion("")    //  "?"
ensureQuestion("Yes") //  "Yes?"
ensureQuestion("No?") //  "No?"
