// Solution:

function vertMirror(strng) {
  return strng.split('\n').map(line => line.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
  return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
  return fct(s);
}

// Sample Tests:

vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu")

oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu") // "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx") // "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"

oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt")                          // "yeCt\nCSbg\nJVhv\nlVHt"
oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz")                          // "cEYz\nLPKo\ndbrZ\nnjMK"
