//Answers to the ISS exercise of the node workshop

var request = require('request');

request('http://api.open-notify.org/iss-now.json',function(error,response,body){
    if (!error) {
        var issData = JSON.parse(body);
        
        console.log("The ISS station has latitude of " + issData.iss_position.latitude.toFixed(2) + " and a longitude of " + issData.iss_position.longitude.toFixed(2));
    } 
    else
    {
        console.log("An error has occured: " + err);
    }
});