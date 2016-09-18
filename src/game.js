/**
 * game.js 
 * @author Your Name <here@foo.bar.baz>
 */ 
var tic = require('./tic-tac-toe.js');
var readlineSync = require('readline-sync');
 
var answer = readlineSync.question('What is the meaning of life?');
console.log(answer);