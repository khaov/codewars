// Solution:

function dup(s) {
  return s.map(word => word.split('')
          .filter((letter, index, array) => letter !== array[index + 1])
          .join('')
  );
};

// Sample Tests:

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]) // ['codewars','picaniny','hubububo']
dup(["abracadabra","allottee","assessee"])                        // ['abracadabra','alote','asese']
dup(["kelless","keenness"])                                       // ['keles','kenes']
dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"])     // ['Wolomolo','flodoromonlighters','chuchchi']
dup(["adanac","soonness","toolless","ppellee"])                   // ['adanac','sones','toles','pele']
dup(["callalloo","feelless","heelless"])                          // ['calalo','feles','heles']
dup(["putteellinen","keenness"])                                  // ['putelinen','kenes']
dup(["kelless","voorraaddoosspullen","achcha"])                   // ['keles','voradospulen','achcha']
