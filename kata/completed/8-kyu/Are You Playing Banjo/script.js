// Solution:

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r" ?
   `${name} plays banjo` :
   `${name} does not play banjo`
}

// Sample Tests:

areYouPlayingBanjo("Adam")  // "Adam does not play banjo"
areYouPlayingBanjo("Paul")  // "Paul does not play banjo"
areYouPlayingBanjo("Ringo") // "Ringo plays banjo"
areYouPlayingBanjo("bravo") // "bravo does not play banjo"
areYouPlayingBanjo("rolf")  // "rolf plays banjo"
