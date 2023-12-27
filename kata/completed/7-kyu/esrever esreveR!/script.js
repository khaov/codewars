// Solution:

function esrever( str ){
  const punctuation = str.slice(str.length - 1);

  return str.slice(0, str.length - 1).split(' ')
            .map(word => word.split('').reverse().join(''))
            .reverse().join(' ')
         + punctuation;
}

// Sample Tests:

esrever('an Easy one?') // 'eno ysaE na?'
esrever('a small lOan OF 1,000,000 $!') // '$ 000,000,1 FO naOl llams a!'
esrever('<?> &!.".') // '".!& >?<.'
esrever('b3tTer p4ss thIS 0ne.') // 'en0 SIht ss4p reTt3b.'
esrever('') // ''
