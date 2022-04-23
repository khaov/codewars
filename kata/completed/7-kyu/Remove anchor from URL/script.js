// Solution:

function removeUrlAnchor(url){
  return url.split('#')[0]
}

// Sample Tests:

removeUrlAnchor('www.codewars.com#about')               // 'www.codewars.com'
removeUrlAnchor('www.codewars.com/katas/?page=1#about') // 'www.codewars.com/katas/?page=1'
removeUrlAnchor('www.codewars.com/katas/')              // 'www.codewars.com/katas/'
