// Solution:

function initializeNames(name) {
  return name.split(' ')
  .map((word, index) => 
    index !== 0 && index !== name.split(' ').length - 1 ? 
    `${word[0]}.`: word
  )
  .join(' ');
}

// Sample Tests:

initializeNames('Jack Ryan') // 'Jack Ryan'
initializeNames('Lois Mary Lane') // 'Lois M. Lane'
initializeNames('Dimitri') // 'Dimitri'
initializeNames('Alice Betty Catherine Davis') // 'Alice B. C. Davis'