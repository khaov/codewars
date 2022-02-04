// Solution:

function domainName(url){
  return url.replace("https://",'').replace("http://",'').replace("www.",'').split('.')[0]
}

// Sample Tests:

domainName("qsl65.org/index.php")
domainName("http://github.com/carbonfive/raygun") // "github"
domainName("http://www.zombie-bites.com")         // "zombie-bites"
domainName("https://www.cnet.com")                // "cnet"
domainName("http://google.com")                   // "google"
domainName("http://google.co.jp")                 // "google"
domainName("www.xakep.ru")                        // "xakep"
domainName("https://youtube.com")                 // "youtube"
