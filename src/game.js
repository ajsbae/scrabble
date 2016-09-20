/**
 * game.js 
 * @author Your Name <here@foo.bar.baz>
 */
var tic = require('./tic-tac-toe.js');
var readlineSync = require('readline-sync');





console.log('Shall we play a game? TIC TAC TOE!')

var rowSize = readlineSync.question('How wide should the board be? (1-26)')
while ( rowSize > 26 || rowSize < 1) {
    rowSize = readlineSync.question('How wide should the board be? (1-26)');
}

var letter = readlineSync.question('Pick your letter: X or O');
while (letter != 'X' && letter != 'O') {

    letter = readlineSync.question('Pick your letter: X or O ');

}
console.log('Player is ' + letter);

var board = tic.generateBoard(rowSize, rowSize, " ");
console.log(tic.boardToString(board));
var computerLetter;
if (letter == 'O') {
    computerLetter = 'X';
    var computerMoveText = readlineSync.question('Press <ENTER> to show computer\'s move...');
    var computerMove = tic.getRandomEmptyCellIndex(board);
    board[computerMove] = computerLetter;
    console.log(tic.boardToString(board));
} else {
    computerLetter = 'O';
}
// console.log(tic.getWinnerRows(board));
while (!tic.checkWinner(board) && !tic.isBoardFull(board)) {
    var move = readlineSync.question('What\'s your move');
    while (!tic.isValidMoveAlgebraicNotation(board, move)) {
        move = readlineSync.question('Your move must be in a format, and it must specify an existing empty cell! What\'s your move?');
    }
    tic.placeLetter(board, letter, move);
    if(tic.checkWinner(board)){

    	break;
    }
    console.log(tic.boardToString(board));
    var computerMoveText = readlineSync.question('Press <ENTER> to show computer\'s move...');
    var computerMove = tic.getRandomEmptyCellIndex(board);
    board[computerMove] = computerLetter;
    console.log(tic.boardToString(board));
}
if(tic.checkWinner(board) === computerLetter){
    console.log(tic.boardToString(board));
	console.log("Computer won!!!");
}
else if (tic.checkWinner(board) === letter){
    console.log(tic.boardToString(board));
	console.log("Player won!!!");
}
else
{
    console.log(tic.boardToString(board));
	console.log("It's a draw")
}



