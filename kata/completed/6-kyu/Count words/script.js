// Solution:

function wordCount(s) {
  const exceptions = ["a", "the", "on", "at", "of", "upon", "in", "as"]

  const filter = /[^a-zA-Z]+/g
  const filteredString = s.replace (filter, ' ')

  const clearedString = filteredString.toLowerCase().split(' ').filter(function(word){
    if(!exceptions.includes(word)){
      return word
    }
  })

  return clearedString.length

}

// Sample Tests:

// Short texts

// wordCount("hello there")                              // 2
// wordCount("hello there and a hi")                     // 4
// wordCount("I'd like to say goodbye")                  // 6
// wordCount("Slow-moving user6463 has been here")       // 6
// wordCount("%^&abc!@# wer45tre")                       // 3
// wordCount("abc123abc123abc")                          // 3
// wordCount("Really2374239847 long ^&#$&(*@# sequence") // 3

let longText = "I’d been using my sphere as a stool. I traced counterclockwise circles on it with my fingertips and it shrank until I could palm it. My bolt had shifted while I’d been sitting. I pulled it up and yanked the pleats straight as I careered around tables, chairs, globes, and slow-moving fraas. I passed under a stone arch into the Scriptorium. The place smelled richly of ink. Maybe it was because an ancient fraa and his two fids were copying out books there. But I wondered how long it would take to stop smelling that way if no one ever used it at all; a lot of ink had been spent there, and the wet smell of it must be deep into everything."
wordCount(longText) // 112
