// Solution:

function nicknameGenerator(name) {
  const vowels = "aeiou".split('');

  return name.length >= 4 ? 
    vowels.includes(name[2]) ? 
      name.slice(0, 4) : 
      name.slice(0, 3) :
    "Error: Name too short";
}

// Sample Tests:

nicknameGenerator("Jimmy")    // "Jim"
nicknameGenerator("Samantha") // "Sam"
nicknameGenerator("Sam")      // "Error: Name too short"
nicknameGenerator("Kayne")    // "Kay", "'y' is not a vowel"
nicknameGenerator("Melissa")  // "Mel"
nicknameGenerator("James")    // "Jam"
nicknameGenerator("Jeannie")  // "Jean"
nicknameGenerator("Douglas")  // "Doug"
nicknameGenerator("Gregory")  // "Greg"