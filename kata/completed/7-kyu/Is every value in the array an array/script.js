// Solution:

const arrCheck = value => value.every(item => Array.isArray(item));

// Sample Tests:

arrCheck([])                        // true
arrCheck([['string']])              // true
arrCheck([[],{}])                   // false
arrCheck([[1],[2],[3]])             // true
arrCheck(['A', 'R', 'R', 'A', 'Y']) // false
