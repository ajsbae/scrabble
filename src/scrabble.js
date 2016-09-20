var readline = require('readline');
var readlineSync = require('readline-sync');
var fs = require('fs');
var fileName = '../data/enable1.txt';
var words = fs.readFileSync(fileName).toString().split('\n');



var input = readlineSync.question('Please enter a word: ');
console.log("");
var inputSplit = input.split("");
var inputLength = inputSplit.length;
// console.log(words.length);

var letterValues = {
    "E": 1,
    "A": 1,
    "I": 1,
    "O": 1,
    "N": 1,
    "R": 1,
    "T": 1,
    "L": 1,
    "S": 1,
    "U": 1,
    "D": 2,
    "G": 2,
    "B": 3,
    "C": 3,
    "M": 3,
    "P": 3,
    "F": 4,
    "H": 4,
    "V": 4,
    "W": 4,
    "Y": 4,
    "K": 5,
    "J": 8,
    "X": 8,
    "Q": 10,
    "Z": 10
};


var possibleWords = []
for (var i = 0; i < words.length; i++) {
    if (words[i].length <= inputLength) {
        words[i] = words[i].split("");
        possibleWords.push(words[i]);
    }
}


// console.log(possibleWords);
checkAndDelete(possibleWords, inputSplit);


var wordAndScore = [];


for (var i = 0; i < possibleWords.length; i++) {
    var sumScore = 0;
    var tempWord = possibleWords[i];

    for (var j = 0; j < possibleWords[i].length; j++) {
        var tempLetter = tempWord[j];
        sumScore = sumScore + letterValues[tempLetter.toUpperCase()];
    }
    var tempWordScore = {
        word: possibleWords[i],
        score: sumScore,
    };
    if(tempWordScore.score > 0){
        wordAndScore.push(tempWordScore);
    }

    

}

wordAndScore.sort();


// sort numbers from highest to lowest
wordAndScore.sort(function(a, b) {
    // if a is less than b, then a should be after b 
    if(a.score < b.score) {
        return 1;
    } else if(a.score > b.score) {
        return -1;
    } else {
        return 0;
    }
});

console.log("The top scoring words in ascending order are:")
for (var i = 2; i >= 0; i--) {
    var outputLine = wordAndScore[i].score + " - " ;
    var tempWord = wordAndScore[i].word;
    for(var j = 0; j < tempWord.length; j++){
        outputLine = outputLine + tempWord[j];
    }
    console.log(outputLine);

}

console.log("The lowest scoring words in ascending order are:")
for (var i = wordAndScore.length-1; i > wordAndScore.length-4 ; i--) {
    var outputLine = wordAndScore[i].score + " - " ;

    var tempWord = wordAndScore[i].word;
    for(var j = 0; j < tempWord.length; j++){
        outputLine = outputLine + tempWord[j];
    }
    console.log(outputLine);

}




function checkAndDelete(array, inputSplit) {
    for (var i = 0; i < array.length; i++) {
        var copyOfInput = inputSplit.slice();
        var testWord = array[i];
        var canMake = true;
        for (var j = 0; j < array[i].length; j++) {
            var indexOfLetter = copyOfInput.indexOf(testWord[j]);
            if (indexOfLetter >= 0) {
                copyOfInput.splice(indexOfLetter, 1);
            } else {
                
                array.splice(i, 1, "");
                canMake = false;
            }
        }
        if (canMake) {

        }

    }

}
