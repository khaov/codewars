// Solution:

function gordon(a) {

  function translate(letter) {
    const vowels = ['e', 'i', 'o', 'u'];

    switch (true) {
      case letter == 'a' || letter == 'A':
        return "@";
      case vowels.includes(letter) || vowels.includes(letter.toLowerCase()):
        return '*';
      default:
        return letter.toUpperCase();
    }
  }

  return a.split('').map(letter => translate(letter)).join('')
          .split(' ').map(word => word + '!!!!' ).join(' ');
}

// Sample Tests:

gordon('What feck damn cake') // 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
gordon('are you stu pid') // '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
gordon('i am a chef') // '*!!!! @M!!!! @!!!! CH*F!!!!'