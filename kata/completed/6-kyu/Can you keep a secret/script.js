// Solution:

function createSecretHolder(secret) {
  return {
    getSecret:function(){
      return secret;
    },
    setSecret:function(s){
      secret = s;
    }
  }
}

// Sample Tests:
