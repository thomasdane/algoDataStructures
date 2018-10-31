

class Board {
    constructor(boardGrid){
        this.boardGrid = boardGrid;
    }

    PrintBoard() {
        this.boardGrid.forEach(row => {
            const rowString = this.PrintRow(row);
            console.log(rowString);
        });
    }

    PrintRow(row) {
        let result = "";
        row.forEach(square => {
            result += square.toString();
        });
        return result;
    }

    AddToken(value, row, column) {
        this.boardGrid[row][column] = value;
    }

    IsFull(){
        let countHyphen = 0;

        this.boardGrid.forEach(row => {
            row.forEach(square => {
                if(square === "-") countHyphen+=1;
            })
        });

        return countHyphen === 0;
    }

    makeMoveAI(){
        this.boardGrid.forEach((row, rowIndex) => {
            row.forEach((square, columnIndex) => {
                if(square === "-") {
                    boardGrid[rowIndex][columnIndex] = 'X';
                    break;
                }

            })
        });
    }

}

/*
- | - | -
*/

const boardGrid = [
    ['-', '|', '-', '|', '-'],
    ['-', '|', '-', '|', '-'],
    ['-', '|', '-', '|', '-']
];


const fullBoardGrid = [
    ['X', '|', 'X', '|', 'X'],
    ['X', '|', 'X', '|', 'X'],
    ['X', '|', 'X', '|', 'X']
];

const board = new Board(boardGrid);
console.log(board.PrintBoard());
board.makeMoveAI();
console.log(board.PrintBoard());


//console.log(board.IsFull()); //false


//const fullBoard = new Board(fullBoardGrid);
//console.log(fullBoard.IsFull()); //true

