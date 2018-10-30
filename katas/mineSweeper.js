////////////////////////////////////////////////////////////
//////////////////// GENERATE MAP //////////////////////////
////////////////////////////////////////////////////////////
const bombSymbol = '*';

class Square {
    constructor(value, row, column){
        this.hidden = true;
        this.value = value;
        this.row = row;
        this.column = column;
    }
}

const getRandomIndex = gridSize => Math.floor(Math.random() * gridSize);
const createRow = (gridSize, row) => createSquares(gridSize, row);

const createSquares = (gridSize, row) => {
    const squares = [];
    for(i = 0; i < gridSize; i++){
        const square = new Square('0', row, i);
        squares.push(square);
    }
    return squares;
}

const generateGrid = (gridSize) => {
    const grid = [];
    for(let i = 0; i < gridSize; i++) {
        const row = createRow(gridSize, i);
        grid.push(row);
    }
    return grid;
}

const generateBombPositions = (gridSize, bombCount) => {
    const bombs = [];
    for(let i = 0; i < bombCount; i++) {
        const bomb = getBombCoords(gridSize);
        bombs.push(bomb);
    }
    return bombs;
}

const getBombCoords = gridSize => {
    const row = getRandomIndex(gridSize);
    const column = getRandomIndex(gridSize);
    return [row, column];
}

const generateGridWithBombs = (grid, bombs) => {
    const temp = grid.map(row => [...row]);

    bombs.forEach(bomb => {
        row = bomb[0];
        column = bomb[1];
        temp[row][column].value = bombSymbol;
    });

    return temp;
}


const printGrid = grid => {
    console.log('row')
    grid.forEach((row, index) => {
        const result = [];

        row.forEach(square => {
            if(square.hidden === true) {
                result.push('?')
            } else {
                result.push(square.value)
            }
        });

        console.log(index.toString(), result);
    });
    console.log('    ', 0, '  ', 1, '  ', 2, '  ', 3, '   column')
    console.log('==========================================')
}

const revealGrid = grid => {
    grid.forEach(row => {
        const result = [];
        row.forEach(square => {
            result.push(square.value)
        });

        console.log(result);
    });
}

const grid = generateGrid(4);
const bombs = generateBombPositions(4, 4);
const gridWithBombs = generateGridWithBombs(grid, bombs);

//////////////////////////////////////////////////////////////////
///////////////////////// GAME LOGIC /////////////////////////////
//////////////////////////////////////////////////////////////////

console.log("Select a square by entering the row and column numbers in order")
printGrid(gridWithBombs);


var input = process.openStdin();
input.addListener("data", function(text) {
    const coords = text.toString();
    const square = getSquare(coords);
    if(isBomb(square)) {
        console.log('BOOM!')
        console.log('You died');
        revealGrid(grid);
        process.exit()
    } else {
        square.hidden = false;
        printGrid(grid);
    }
});

const getSquare = coords => {
    const row = coords.split('')[0];
    const column = coords.split('')[1];
    return grid[row][column];
}

const isBomb = square => {
    return square.value === bombSymbol;
} 