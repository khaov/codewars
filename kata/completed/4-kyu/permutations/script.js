// Solution:

function permutations(string) {

  const sourceArray = string.split('');
  const resultArray = [];

  const permute = (array, permutation = []) => {
    if (array.length === 0) {
      resultArray.push(permutation.join(''));
    } else {
      for (let i = 0; i < array.length; i++) {
        let curr = array.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), permutation.concat(next));
     }
    }
  }

  permute(sourceArray);

  return resultArray.filter((item, index, array) => index === array.indexOf(item));
}

// Sample Tests:

permutations('a')     //  ['a']
permutations('ab')    //  ['ab', 'ba']
permutations('aabb')  //  ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
