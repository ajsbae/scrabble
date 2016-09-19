var readline = require('readline');
var readlineSync = require('readline-sync');
var fs = require('fs');
var fileName = '../data/enable1.txt';




var input = readlineSync.question('Please enter a word: ');
var inputSplit = input.split("");
var inputLength = input.length;

var array = fs.readFileSync(fileName).toString().split('\n');

