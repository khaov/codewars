// Solution:

function sentence(arrayOfObjects) {

  function objectKey(object) {
    return Number(Object.keys(object).join(''));
  }

  return arrayOfObjects
    .sort((prev, next) => objectKey(prev) - objectKey(next))
    .map(object => Object.values(object).join(''))
    .join(' ')
}

// Sample Tests:

sentence([{'1': 'dog' }, {'2': 'took'}, {'4': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}]) //  'dog took Vatsan for a spin'
sentence([{'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}]) //  'Forget it Jake. It is Chinatown'
sentence([ {'3': 'vatsan!'}, {'2': 'love'}, {'1': 'I'} ]) //  'I love vatsan!'
sentence([ {'0': 'Wars'}, {'-1': 'Code'} ]) // 'Code Wars'
