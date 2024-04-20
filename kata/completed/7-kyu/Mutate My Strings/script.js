// Solution:

function mutateMyStrings(stringOne, stringTwo) {
  const one = stringOne.split('');
  const two = stringTwo.split('');
  const length = one.length;
  const mutated = [one.join('')];

  for (let i = 0; i < length; i++) {
    if(one[i] !== two[i]) {
      one[i] = two[i];
      mutated.push(one.join(''));
    }
  }

  return mutated.join('\n') + '\n';
}

// Sample Tests:

mutateMyStrings('bubble gum', 'turtle ham') // 'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n'
