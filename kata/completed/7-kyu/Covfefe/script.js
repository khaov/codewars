// Solution:

function covfefe(str) {
    return str.includes("coverage") ? 
           str.replaceAll('coverage', 'covfefe') :
           `${str} covfefe`;
}

// Sample Tests:

covfefe("coverage")             // "covfefe"
covfefe("coverage coverage")    // "covfefe covfefe"
covfefe("nothing")              // "nothing covfefe"
covfefe("double space ")        // "double space  covfefe"
covfefe("covfefe")              // "covfefe covfefe"
covfefe("erag")                 // "erag covfefe"
