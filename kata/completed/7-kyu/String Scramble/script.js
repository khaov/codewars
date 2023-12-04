// Solution:

function scramble(str, arr) {
  let scrambleArray = [];

  for(let i = 0; i < arr.length; i++) {
    scrambleArray[arr[i]] = str[i];
  }

  return scrambleArray.join('');
};

// Sample Tests:

scramble('abcd', [0,3,1,2])       // 'acdb', "Should return acdb"
scramble('sc301s', [4,0,3,1,5,2]) // "c0s3s1", "Should return c0s3s1"
scramble('bskl5', [2,1,4,3,0])    // "5sblk", "Should return 5sblk"