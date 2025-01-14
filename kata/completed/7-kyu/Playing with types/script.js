// Solution:

function typing(param){
  switch (true) {
    case typeof param === 'undefined':
      return 'undefined'
      break;
    case typeof param === 'string':
      return `${typeof param}="${param}"`
      break;
    case typeof param === 'function':
      return `${typeof param}=${param}`
      break;
    default:
     return `${typeof param}=${JSON.stringify(param)}`
  }
}

// Sample Tests:

typing(2);            //returns "number=2"
typing(true);         //returns "boolean=true"
typing("test");       //returns "string="test""
typing([1,2,3]);      //returns "object=[1,2,3]"
typing({a:1,b:2});    //returns "object={"a":1,"b":2}"
typing(function(){}); //returns "function=function (){}"
typing(undefined);    //returns "undefined"
