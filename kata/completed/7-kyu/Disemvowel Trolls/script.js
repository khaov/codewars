// Solution:

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('')
}

// Sample Tests:

disemvowel("This website is for losers LOL!") // "Ths wbst s fr lsrs LL!"
disemvowel("No offense but,\nYour writing is among the worst I've ever read")// "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
disemvowel("What are you, a communist?") // "Wht r y,  cmmnst?"