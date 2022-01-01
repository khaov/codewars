// Solution:

function printerError(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const errors = alphabet.slice(13 ,28);
  let errorsCounter = 0;

  s.split('').forEach(function(code){
    if (errors.includes(code)) {
      errorsCounter++
    }
  });

  return `${errorsCounter}/${ s.length}`;
}

// Sample Tests:

printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'); // "3/56"
