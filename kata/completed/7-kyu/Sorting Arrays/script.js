// Solution:

function sortArray(a1, a2) {
  const firstLetterArray = a1.map(word => word[0]);
  return a2.sort((prev, next) => firstLetterArray.indexOf(prev[0]) - firstLetterArray.indexOf(next[0]));
}

// Sample Tests:

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
sortArray(a1, a2) // ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
sortArray(a1, a2) // ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

var a1 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
var a2 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
sortArray(a1, a2) // ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']

