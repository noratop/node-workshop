//Nora Top - 2015/09/15: The hangman program 

var prompt = require("prompt");

var drawing = [];
var listOfWord = ['decodemtl','javascript','callback','montreal','lacommune','nodejs'];

function randomWord(list){
    var indexOfWord = Math.round(list.length * Math.random());
    return list[indexOfWord];
}

var wordToGuess = randomWord(listOfWord);

console.log(wordToGuess);
    
console.log('Guess what the word is!')

function drawHangman(stage){
    
    for (var j = 0; j <= 7; j++){
        
    	var newRow = [];
    	
    	for (var i = 0; i <= 5; i++){
    		
    		if (i === 0) newRow.push('|');
    		else if (j <= 2 && i != 0){newRow.push(' ');}
    		else if (j===3){
    		    if (i===3 && stage <= 18) newRow.push('/');
    		    else if (i===5 && stage <= 19) newRow.push('\\');
    		    else newRow.push(' ');
    		}
    		else if (j===4) {
    		    if (i===3 && stage <= 15) newRow.push('/');
    		    else if (i===4 && stage <= 16) newRow.push('|');
    		    else if (i===5 && stage <= 17) newRow.push('\\');
    		    else newRow.push(' ');
    		}
    		else if (j===5) {
    		    if (i===4 && stage <= 14) newRow.push('o');
    		    else newRow.push(' ');
    		}
    		else if (j===6) {
    		    if (i===4 && stage <= 13) newRow.push('|');
    		    else newRow.push(' ');
    		}
    		else if (j===7) {
    		    if (i > 0 && i < stage-8) newRow.push('|');
    		    else newRow.push(' ');
    		}
    		else {newRow.push();}
    	}
    
    	drawing.unshift(newRow);
    	//console.log(newRow);
    }
    return drawing;
}

function printDrawing(drawing){
	if (drawing instanceof Array){
		drawing.forEach(function(element){
			console.log(element.join(' '));
		});
	}
}

drawing=drawHangman(19);
printDrawing(drawing);


/*
function hangman(){
    console.log('Guess a letter in the word')
    prompt.start();
    prompt.get()
}
*/