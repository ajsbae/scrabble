/**
 * tic-tac-toe.js 
 * @author Your Name <here@foo.bar.baz>
 */

// Parameters:
// value - the value to be repeated
// n - the number of times to repeat the value
// Returns:
// an Array containing n elements, with each element being value

function repeat(value, n) {
	var board = {};
    for (i = 0; i < totalSpaces ; i++) {
    	board.push(value);
    }
    return board;

}

// Parameters:
// rows - the number of rows in the board
// columns - the number of columns in the board
// initialCellValue - the initial value contained in each square
// Returns:
// a single dimensional Array containing the number of elements that would be in a rows x columns board… 
// with each cell containing the initial value, initialCellValue
function generateBoard(rows, columns, initialCellValue) {

}

// Parameters:
// board - the board where the rowNumber and columnNumber come from
// rowNumber - the row number to be converted to an index in a one dimensional aArray representation
// columnNumber - the column number to be converted to an index in a one dimensional aArray representation
// Returns:
// a Number, the index that's mapped to by the given rowNumber and columnNumber
function rowColToIndex(board, rowNumber, columnNumber) {

}



// Parameters:
// board - the board where the rowNumber and columnNumber come from
// i - the index to be converted into a row and column
// Returns:
// an object containing two properties, row and col, representing the row and column numbers that the index maps to
function indexToRowCol(board, i) {


}


// Parameters:
// board - the board where a cell will be set to letter
// letter - the string to set the cell to
// row - the row number of the cell to be set
// col - the column number of the cell to be set
// Returns:
// a single dimensional Array representing the board where the cell at row and col is set to the value of letter

function setBoardCell(board, letter, row, col) {

}


// Parameters:
// algebraicNotation - a String that specifies the position of a cell using algebraic notation
// Returns:
// an object containing two properties, row and col, representing the row and column numbers that the algebraicNotation maps to (for example, {"row": 1, "col": 1})
// undefined if the algebraic notation passed in is not valid.
function algebraicToRowCol(algebraicNotation) {

}



// Parameters:
// board - the board where a cell will be set to letter
// letter - the string to set the cell to
// algebraicNotation - a String that specifies the position of a cell using algebraic notation
// Returns:
// a single dimensional Array representing the board where the cell at row and col is set to the value of letter
function placeLetter(board, letter, algebraicNotation) {

}




// Parameters:
// board - the board to be converted to a String
// Returns:
// a String representation of the board
function boardToString(board) {

}



// Parameters:
// board - the board to examine for a winner
// Returns:
// the letter of the winning player or undefined if there is no winner yet (based on rows)
function getWinnerRows(board) {

}




// Parameters:
// board - the board to examine for a winner
// Returns:
// the letter of the winning player or undefined if there is no winner yet (based on columns)
function getWinnerCols(board) {}


// Parameters:
// board - the board to examine for a winner
// Returns:
// the letter of the winning player or undefined if there is no winner yet (based on diagonals)
function getWinnerDiagonals(board) {

}



// Parameters:
// board - the board to examine
// Returns:
// true if there are no empty cells left in the board, false otherwise
function isBoardFull(board) {

}




// Parameters:
// board - the board the move is performed on
// row - the row number of the move
// col - the column number of the move
// Returns:
// true if the move is valid, false otherwise
function isValidMove(board, row, col) {


}


// Parameters:
// board - the board the move is performed on
// algebraicNotation - algebraic notation representing a move on the board
// Returns:
// true if the move is valid, false otherwise
function isValidMoveAlgebraicNotation(board, algebraicNotation) {}




// Parameters:
// board - the board to get an empty cell from
// Returns:
// index of an empty square on the board, undefined if the board is full
function getRandomEmptyCellIndex(board) {


}
