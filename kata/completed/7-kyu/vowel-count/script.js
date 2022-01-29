// Solution:

function getCount(str) {
  var vowelsCount = 0;

  const vowels = "aeiou".split('');

  str.split('').forEach(function(letter){
    if(vowels.includes(letter)){
      vowelsCount++
    }
  })

  return vowelsCount;
}

// Sample Tests:

getCount("abracadabra") // 5
