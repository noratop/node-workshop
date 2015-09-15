//Answers to the ISS exercise of the node workshop


//necessary function for distanceTo
Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
}


//Returns distance between point1 and point2;
var distanceTo = function(point1, point2, radius) {
    radius = (radius === undefined) ? 6371 : Number(radius);

    var R = radius;
    var φ1 = point1.lat.toRadians(),  λ1 = point1.lng.toRadians();
    var φ2 = point2.lat.toRadians(), λ2 = point2.lng.toRadians();
    var Δφ = φ2 - φ1;
    var Δλ = λ2 - λ1;

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    return d;
};


var request = require('request');
var prompt = require('prompt');
var userInput;
var issLatLong = {};

request('http://api.open-notify.org/iss-now.json',function(error,response,body){
    if (!error) {
        issLatLong = JSON.parse(body);
        issLatLong.lat = issLatLong.iss_position.latitude;
        issLatLong.lng = issLatLong.iss_position.longitude;
    } 
    else console.log('An error occured.')
});


console.log('What is your current location ?');

prompt.start();

prompt.get(['location'],function(error,result){
    userInput = result.location;
    request('https://maps.googleapis.com/maps/api/geocode/json?address='+userInput,function(error,response,body){
        if (!error) {
            var userGeoLocation = JSON.parse(body).results[0].geometry.location;
            var distance = distanceTo(userGeoLocation,issLatLong);
            
            console.log('You are located '+ Math.round(distance) + 'km from the ISS station');
        }
        else console.log('An error occured.')
    });
});