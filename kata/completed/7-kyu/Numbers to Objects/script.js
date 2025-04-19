// Solution:

function numObj(s) {
  const objects = Array.from({length:s.length}, x => x = {});
  let values = [];

  s.forEach(number => values.push(String.fromCharCode(number)))
  objects.map((object, index) => object[s[index]] = values[index]);

  return objects;
}

// Sample Tests:

numObj([118,117,120])             // [{'118':'v'}, {'117':'u'}, {'120':'x'}]
numObj([101,121,110,113,113,103]) // [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]
