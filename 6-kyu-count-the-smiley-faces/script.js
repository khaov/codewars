// Solution:

function countSmileys(arr) {
  eyesElements = [':',';'];
  noseElements = ['-','~'];
  mouthElements = [')','D'];

  let smilesCounter = 0;

  arr.forEach(function(smile) {

    let validElementsCounter = 0;

    if (smile.length === 2) {
      smile.split('').forEach(function(element, index , array) {
        if (eyesElements.includes(array[0]) && mouthElements.includes(array[1])) {
          return validElementsCounter++
        }
      });
    } else if (smile.length === 3) {
      smile.split('').forEach(function(element, index , array) {
        if (eyesElements.includes(array[0]) && noseElements.includes(array[1]) && mouthElements.includes(array[2])) {
          return validElementsCounter++
        }
      });
    }

    if (validElementsCounter === smile.length){
      smilesCounter++
    }
  });

  return smilesCounter;
}

// Sample Tests:

countSmileys([])                                // 0
countSmileys([':D',':~)',';~D',':)'])           // 4
countSmileys([':)',':(',':D',':O',':;'])        // 2
countSmileys([';]', ':[', ';*', ':$', ';-D'])   // 1
countSmileys([':)', ';(', ';}', ':-D']);        // 2
countSmileys([';D', ':-(', ':-)', ';~)']);      // 3
countSmileys([';]', ':[', ';*', ':$', ';-D']);  // 1
