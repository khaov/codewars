// Solution:

function shorter_reverse_longer(a,b){
  const shorter = a.length >= b.length ? b : a;
  const longer = a.length >= b.length ? a : b;

  return `${shorter}${longer.split('').reverse().join('')}${shorter}`
}

// Sample Tests:

shorter_reverse_longer("first", "abcde")  // "abcdetsrifabcde"
shorter_reverse_longer("hello", "bau")    // "bauollehbau"
shorter_reverse_longer("fghi", "abcde")   // "fghiedcbafghi"
