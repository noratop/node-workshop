//Answers to the number-guessing-game for the node workshop

var prompt = require('prompt');

var numberToGuess = Math.round(100 * Math.random());
var userTries = [];
var tryNumber = 1;

console.log("You have 4 chances to guess what the number is!");

function guess(num) {
    if (num <= 4) {
        
        console.log("type a number between 1 and 100");
        num++;
        
        prompt.start();
        prompt.get(['number'],function(error,result){
            
            var userInput = parseInt(result.number,10);
            userTries.push(userInput);
            
            if (userInput === numberToGuess) {
                console.log('Congratulation!! You found the number');
            }
            else {
                guess(num);
            }
            
        });
    }
    else {console.log('You failed! The right number was ' + numberToGuess + '. Here are the numbers you have tried : ' + userTries.join(','));}
}

guess(tryNumber);