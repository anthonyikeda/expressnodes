var request = require('request');
var config = require('./config');

conf = new config();

function parseCampaigns(html) {
  html['elements'].forEach(function(element) {
    console.log(element);
  });
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    parseCampaigns(JSON.parse(body));
  } else {
    console.log("Error happened: " + error);
    console.log(response.statusCode);
  }
}

 exports.listCampaigns = function(accountId) {

  var endpoint = conf.serverUrl + "/" + accountId + "/campaign";

  console.log("Server URL: " + endpoint);

  request.get(endpoint, 
  {
    "auth" : {
      "user" : conf.username,
      "pass" : conf.password,
      "sendImmediately" : true
    }
  }, callback);
}

