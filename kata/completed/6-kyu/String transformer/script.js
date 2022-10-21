// Solution:

function stringTransformer(str) {
  return str.split(' ')
            .map(word =>
                 word.split('')
                      .map(letter => {
                        if (letter === letter.toLowerCase()) {return letter.toUpperCase()}
                        if (letter === letter.toUpperCase()) {return letter.toLowerCase()}
                      }).join('')

                )
                .reverse()
                .join(' ')
}

// Sample Tests:

stringTransformer('Example string') // 'STRING eXAMPLE'
