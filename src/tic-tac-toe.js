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
    var board = [];
    for (i = 0; i < n; i++) {
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
    var totalSpaces = rows * columns;
    var board = repeat(initialCellValue, totalSpaces);
    return board;
}

// Parameters:
// board - the board where the rowNumber and columnNumber come from
// rowNumber - the row number to be converted to an index in a one dimensional aArray representation
// columnNumber - the column number to be converted to an index in a one dimensional aArray representation
// Returns:
// a Number, the index that's mapped to by the given rowNumber and columnNumber
function rowColToIndex(board, rowNumber, columnNumber) {
    var rowSize = Math.sqrt(board.length);
    return rowNumber * rowSize + columnNumber;
}



// Parameters:
// board - the board where the rowNumber and columnNumber come from
// i - the index to be converted into a row and column
// Returns:
// an object containing two properties, row and col, representing the row and column numbers that the index maps to
function indexToRowCol(board, i) {
    var rowSize = Math.sqrt(board.length);
    var rowNumber = Math.floor(i / rowSize);
    var RowCol = {
        row: "0",
        col: "0",
    };
    RowCol.row = rowNumber;
    RowCol.col = i - (rowNumber * rowSize);
    return RowCol;
}


// Parameters:
// board - the board where a cell will be set to letter
// letter - the string to set the cell to
// row - the row number of the cell to be set
// col - the column number of the cell to be set
// Returns:
// a single dimensional Array representing the board where the cell at row and col is set to the value of letter

function setBoardCell(board, letter, row, col) {
    var index = rowColToIndex(board, row, col);
    var boardTemp = board.slice(0, board.length);
    boardTemp.splice(index, 1, letter);
    return boardTemp;

}


// Parameters:
// algebraicNotation - a String that specifies the position of a cell using algebraic notation
// Returns:
// an object containing two properties, row and col, representing the row and column numbers that the algebraicNotation maps to (for example, {"row": 1, "col": 1})
// undefined if the algebraic notation passed in is not valid.
function algebraicToRowCol(algebraicNotation) {
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var firstChar = algebraicNotation.charAt(0);
    var secondChar = algebraicNotation.charAt(1);
    var thirdChar = algebraicNotation.charAt(2);
    var RowCol = {
        row: "0",
        col: "0",
    };
    if (!(firstChar.match(/[a-z]/i))) {
        return undefined;
    } else {
        for (i = 0; i < letters.length; i++) {
            if (firstChar === letters[i]) {
                RowCol.row = i;
            }
        }
    }
    if (!(secondChar.match(/[1-2]/i)) && !(secondChar.match(/[1-6]/i))) {
        return undefined;
    } else {
        var numberString = secondChar + thirdChar;

        RowCol.col = numberString - 1;
    }
    return RowCol;

}



// Parameters:
// board - the board where a cell will be set to letter
// letter - the string to set the cell to
// algebraicNotation - a String that specifies the position of a cell using algebraic notation
// Returns:
// a single dimensional Array representing the board where the cell at row and col is set to the value of letter
function placeLetter(board, letter, algebraicNotation) {
    var RowCol = algebraicToRowCol(algebraicNotation);
    var row = RowCol.row;
    var col = RowCol.col;
    var rowSize = Math.sqrt(board.length);
    board[row * rowSize + col] = letter;
    return board;


}




// Parameters:
// board - the board to be converted to a String
// Returns:
// a String representation of the board
function boardToString(board) {
    var rowSize = Math.sqrt(board.length);
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var printBoard = "   ";
    var hr = "   ";



    for (var i = 0; i < rowSize; i++) {
        var tempLabel = i + 1
        if (i === 0)
            printBoard = printBoard + "  " + tempLabel;
        else {
            printBoard = printBoard + "   " + tempLabel;
        }
    }


    for (var i = 0; i < rowSize; i++) {
        hr = hr + "+---";
    }
    hr = hr + "+";
    printBoard = printBoard + "\n" + hr + "\n";
    for (var i = 0; i < rowSize; i++) {
        printBoard = printBoard + " " + letters[i] + " ";

        var tempRow = [];
        for (var j = 0; j < rowSize; j++) {

            tempRow.push(board[i * rowSize + j]);

            if (j === rowSize - 1) {
                for (var x = 0; x < tempRow.length + 1; x++) {
                    if (tempRow[x] != undefined) {
                        printBoard = printBoard + "|" + " " + tempRow[x] + " ";
                    }

                }
                printBoard = printBoard + "|"
            }
        }


        printBoard = printBoard + "\n";
        printBoard = printBoard + hr + "\n";
    }

    return printBoard;

}



// Parameters:
// board - the board to examine for a winner
// Returns:
// the letter of the winning player or undefined if there is no winner yet (based on rows)
function getWinnerRows(board) {


    var winner = false
    var rowSize = Math.sqrt(board.length);
    var winningLetter = undefined;


    for (var startRow = 0; startRow < board.length; startRow = startRow + rowSize) {
        if (board[startRow] != " ") {
            winningLetter = board[startRow];
        }
        var counter = 0;
        winner = true;
        while (startRow + counter < startRow + rowSize) {
            if (board[startRow + counter] != winningLetter) {
                winner = false;
            }
            counter++;
        }
        if (winner) {
            return winningLetter;
        }

    }
    return undefined;

}




// Parameters:
// board - the board to examine for a winner
// Returns:
// the letter of the winning player or undefined if there is no winner yet (based on columns)
function getWinnerCols(board) {
    var rowSize = Math.sqrt(board.length);
    var winner = true;
    var winningLetter;

    for (var i = 0; i < rowSize; i++) {
        for (var j = 0; j < board.length; j = j + rowSize) {
            if (board[i] != " ") {
                winningLetter = board[i];
            }
            if (board[i + j] != winningLetter) {
                winner = false;
            }
        }
        if (winner === true) {

            return winningLetter;
        }
        winner = true;
    }
    return undefined;



}


// Parameters:
// board - the board to examine for a winner
// Returns:
// the letter of the winning player or undefined if there is no winner yet (based on diagonals)
function getWinnerDiagonals(board) {
    var major = majorDiagonal(board);
    var minor = minorDiagonal(board);

    if (major != undefined || minor != undefined) {
        if (major != undefined) {
            return major;
        }
        if (minor != undefined) {
            return minor;
        }
    } else {
        return minor;
    }
}


function majorDiagonal(board) {
    var rowSize = Math.sqrt(board.length);
    var winningLetter = undefined;
    var winner = true;
    var index = 0;
    if (board[index] != " ") {
        winningLetter = board[index];
    }
    while (index + rowSize + 1 < board.length) {
        if (board[index] != winningLetter) {
            winner = undefined;
        }
        index = index + rowSize + 1;
    }
    if (winner) {
        return winningLetter;
    } else {
        return undefined;
    }
}


function minorDiagonal(board) {
    var rowSize = Math.sqrt(board.length);
    var winningLetter = undefined;
    var winner = true;
    var index = rowSize - 1;
    if (board[index] != " ") {
        winningLetter = board[index];
    }
    while (index + rowSize - 1 < board.length) {
        if (board[index] != winningLetter) {
            winner = undefined;
        }
        index = index + rowSize - 1;
    }

    if (winner) {
        return winningLetter;
    } else {
        return undefined;
    }
}


// Parameters:
// board - the board to examine
// Returns:
// true if there are no empty cells left in the board, false otherwise
function isBoardFull(board) {
    for (var i = 0; i < board.length; i++) {
        if (board[i] === " ") {
            return false;
        }
    }
    return true;
}




// Parameters:
// board - the board the move is performed on
// row - the row number of the move
// col - the column number of the move
// Returns:
// true if the move is valid, false otherwise
function isValidMove(board, row, col) {
    var rowSize = Math.sqrt(board.length);
    if (row < rowSize && col < rowSize && board[row * rowSize + col] === " ") {
        return true;
    } else {
        return false;
    }

}


// Parameters:
// board - the board the move is performed on
// algebraicNotation - algebraic notation representing a move on the board
// Returns:
// true if the move is valid, false otherwise
function isValidMoveAlgebraicNotation(board, algebraicNotation) {
    var rowSize = Math.sqrt(board.length);
    var RowCol = algebraicToRowCol(algebraicNotation);
    if (RowCol === undefined) {
        return false;
    }

    var row = RowCol.row;
    var col = RowCol.col;
    return isValidMove(board, row, col);
    return false;


}

// Parameters:
// board - the board to get an empty cell from
// Returns:
// index of an empty square on the board, undefined if the board is full
function getRandomEmptyCellIndex(board) {
    var emptyCells = []
    for (var i = 0; i < board.length; i++) {
        if (board[i] === " ") {
            emptyCells.push(i);
        }
    }
    if (emptyCells.length === 1) {
        return emptyCells[0];
    }
    
    var randomInEmpty = Math.floor(Math.random() * (emptyCells.length + 1));
    console.log(emptyCells[randomInEmpty]);
    return emptyCells[randomInEmpty];

}

function checkWinner(board) {
    if (getWinnerRows(board) != undefined) {
        return getWinnerRows(board);
    } else if (getWinnerCols(board) != undefined) {
        return getWinnerCols(board);
    } else if (getWinnerDiagonals(board) != undefined) {
        return getWinnerDiagonals(board);
    } else {
        return false;
    }

}

module.exports = {
    repeat: repeat,
    generateBoard: generateBoard,
    rowColToIndex: rowColToIndex,
    indexToRowCol: indexToRowCol,
    setBoardCell: setBoardCell,
    algebraicToRowCol: algebraicToRowCol,
    placeLetter: placeLetter,
    boardToString: boardToString,
    getWinnerRows: getWinnerRows,
    getWinnerCols: getWinnerCols,
    getWinnerDiagonals: getWinnerDiagonals,
    isBoardFull: isBoardFull,
    isValidMove: isValidMove,
    isValidMoveAlgebraicNotation: isValidMoveAlgebraicNotation,
    getRandomEmptyCellIndex: getRandomEmptyCellIndex,
    checkWinner : checkWinner
}
