//Nora Top - 2015/09/15: The hangman program 

var prompt = require("prompt");

var listOfWord = ['decodemtl','javascript','callback','montreal','lacommune','nodejs'];

function randomWord(list){
    var indexOfWord = Math.round(list.length * Math.random());
    return list[indexOfWord];
}

var wordToGuess = randomWord(listOfWord);

console.log(wordToGuess);
    
console.log('Guess what the word is!')

function drawHangman(stage){
    
}

function hangman(){
    console.log('Guess a letter in the word')
    prompt.start();
    prompt.get()
}
