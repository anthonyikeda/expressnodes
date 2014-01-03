var contextPath = "/scapi-web/rest/v3/account";

module.exports = function() {
  switch(process.env.NODE_ENV) {
    case 'local' :
      return {
        "serverUrl" : "https://scapi.d1.roving.com" + contextPath,
        "username" : "devUser1",
        "password" : "ROVING"
      };
    case 'D100' :
      return {
        "serverUrl" : "https://scapi.d1.roving.com" + contextPath,
        "username" : "devUser1",
        "password" : "ROVING"
      };
    case 'F100' :
      return {
        "serverUrl" : "https://scapi.f1.roving.com" + contextPath,
        "username" : "I_dont_know",
        "password" : "letmein"
      };
    default : 
      return {
        "serverUrl" : "https://scapi.d1.roving.com" + contextPath,
        "username" : "devUser1",
        "password" : "ROVING"
      };
  }
};
