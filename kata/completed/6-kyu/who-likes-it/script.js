// Solution:

function likes(names) {
  switch (true) {
    case (names.length === 0):
      return 'no one likes this'
      break;
    case (names.length === 1):
      return `${names[0]} likes this`
      break;
    case (names.length === 2):
      return `${names[0]} and ${names[1]} like this`
      break;
    case (names.length === 3):
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
      break;
    case (names.length >= 4):
      return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
      break;
  }
}

// Sample Tests:

likes([]) // 'no one likes this'
likes(['Peter']) // 'Peter likes this'
likes(['Jacob', 'Alex']) // 'Jacob and Alex like this'
likes(['Max', 'John', 'Mark']) // 'Max, John and Mark like this'
likes(['Alex', 'Jacob', 'Mark', 'Max']) // 'Alex, Jacob and 2 others like this'
