// Solution:

function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(word) { return word[0] + (word.length - 2) + word[word.length - 1] });
}

// Sample Tests:

abbreviate("internationalization")            // "i18n"
abbreviate("accessibility")                   // "a11y"
abbreviate("Accessibility")                   // "A11y"
abbreviate("elephant-ride")                   // "e6t-r2e"
abbreviate("elephant-rides are really fun!")  // "e6t-r3s are r4y fun!"
