// Solution:

function bump(x) {
  return x.split('').filter(item => item === 'n').length > 15 ? "Car Dead" : "Woohoo!";
}

// Sample Tests:

bump("n")                                   // "Woohoo!"
bump("_nnnnnnn_n__n______nn__nn_nnn")       // "Car Dead"
bump("______n___n_")                        // "Woohoo!"
bump("n__n_n_nn_n__nn__nn____")             // "Woohoo!"
bump("_n__n___n_n_n_n_______nnn_nn_n_nnn_") // "Woohoo!"
