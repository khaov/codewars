// Solution:

function stripUrlParams(url, paramsToStrip=[]){
  const urlParts = url.split('?')

  const urlAddress = urlParts[0];

  const urlQueries = urlParts[1] !== undefined ?
                     urlParts[1].split('&')
                                .map(query => query.split('=')[0]):
                                '';

  const urlParams =  urlParts[1] !== undefined ?
                     urlParts[1].split('&')
                                .filter((param, index, array) => !paramsToStrip.includes(param[0]) && index === urlQueries.indexOf(param[0]))
                                .join('&') :
                                ''

  return urlParams.length ? `${urlAddress}?${urlParams}` : urlAddress;
}

// Sample Tests:

let url1 = 'www.codewars.com?a=1&b=2';
let url2 = 'www.codewars.com?a=1&b=2&a=1&b=3';
let url3 = 'www.codewars.com?a=1';
let url4 = 'www.codewars.com';

stripUrlParams(url1)              // url1, www.codewars.com?a=1&b=2
stripUrlParams(url2)              // url1, www.codewars.com?a=1&b=2
stripUrlParams(url2, ['b'])       // url3, www.codewars.com?a=1
stripUrlParams(url4, ['b'])       // url4, www.codewars.com
stripUrlParams(url1, ['a', 'b'])  // url4, www.codewars.com
