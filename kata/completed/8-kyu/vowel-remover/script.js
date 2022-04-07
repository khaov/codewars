// Solution:

function shortcut (string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return string.split('').filter(letter => !vowels.includes(letter)).join('');
}

// Sample Tests:

shortcut ('hello')              // 'hll'
shortcut ('how are you today?') // 'hw r y tdy?'
shortcut ('complain')           // 'cmpln'
shortcut ('never')              // 'nvr'
