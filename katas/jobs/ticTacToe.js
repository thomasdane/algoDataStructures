class Game {
    constructor(){
        this.board = this.CreateBoard();
        this.token = 'X';
    }

    CreateBoard(){
        const board = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];

        return board;
    }

    PrintBoard() {
        this.board.forEach(row => console.log(row));
    }

    AddToken(value, row, column) {
        this.board[row][column] = value;
    }

    IsFull(){
        this.board.forEach(row => {
            row.forEach(square => {
                if(square === "-") return false;
            })
        });

        return countHyphen === 0;
    }

    makeMoveAI(){
        this.board.forEach((row, rowIndex) => {
            row.forEach((square, columnIndex) => {
                if(square === "-") {
                    board[rowIndex][columnIndex] = 'X';
                    break;
                }

            })
        });
    }
}

const fullBoardGrid = [
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
    ['X', 'X', 'X']
];

const game = new Game();
game.PrintBoard();

const fullGame = new Game();

