/**
 * game.js 
 * @author Your Name <here@foo.bar.baz>
 */
var tic = require('./tic-tac-toe.js');
var readlineSync = require('readline-sync');





console.log('Shall we play a game of TIC TAC TOE?')

var rowSize = readlineSync.question('How wide should the board be? (1-26)');
while (!rowSize < 27 && !rowSize > 0) {
    rowSize = readlineSync.question('How wide should the board be? (1-26)');

}

var letter = readlineSync.question('Pick your letter: X or O');
while (letter != 'X' && letter != 'O'){

    letter = readlineSync.question('Pick your letter: X or O');

}

var board = tic.generateBoard(rowSize, rowSize, " ");
tic.boardToString(board);


while()