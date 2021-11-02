// Solution:

function solution(str){
  const sourceArray = str.split('');
  const resultArray = [];

  if (sourceArray.length % 2 !== 0 ){
    sourceArray.push('_');
  }

  const oddArray = sourceArray.filter(function(item, index){
    if (index % 2 === 0) {
      return item; 
    }
   });

   const evenArray = sourceArray.filter(function(item, index){
    if (index % 2 !== 0) {
      return item; 
    }
   });

   for (let i = 0; i < sourceArray.length / 2; i++) {
    resultArray.push(oddArray[i] + evenArray[i]);
   }

  return resultArray;
}

// Sample Tests:

//solution("abcdef") // ["ab", "cd", "ef"]
solution("abcdefg") // ["ab", "cd", "ef", "g_"]