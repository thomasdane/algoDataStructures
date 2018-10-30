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

const addBombProximity = grid => {
    grid.forEach(row => {
        row.forEach(square => {
            if(square.value !== bombSymbol){
                getNeighbours(grid, square.row, square.column);
            }
        });
    })
}

const getNeighbours = (grid, row, column) => {
    const result = [];

    const left = column - 1; 
    const right = column + 1; 
    const above = row - 1; 
    const below = row + 1;

    const hasLeft = left >= 0;
    const hasRight = right < gridSize;
    const hasTop = above >= 0;
    const hasBelow = below < gridSize;

    if(hasLeft) result.push(grid[row][left].value);
    if(hasRight) result.push(grid[row][right].value);
    if(hasTop) result.push(grid[above][column].value);
    if(hasBelow) result.push(grid[below][column].value);

    if(hasLeft && hasTop) result.push(grid[above][left].value);
    if(hasLeft && hasBelow) result.push(grid[below][left].value);
    if(hasRight && hasTop) result.push(grid[above][right].value);
    if(hasRight && hasBelow) result.push(grid[below][right].value);

    const bombCount = result.filter(value => value === '*').length;
    grid[row][column].value = bombCount.toString();
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

const gridSize = 6;
const bombNumber = 6;
const grid = generateGrid(gridSize);
const bombs = generateBombPositions(gridSize, bombNumber);
const gridWithBombs = generateGridWithBombs(grid, bombs);

addBombProximity(gridWithBombs);
revealGrid(gridWithBombs);

//////////////////////////////////////////////////////////////////
///////////////////////// GAME LOGIC /////////////////////////////
//////////////////////////////////////////////////////////////////

console.log("Select a square by entering the row and column numbers in order")
printGrid(gridWithBombs);


// var input = process.openStdin();
// input.addListener("data", function(text) {
//     const coords = text.toString();
//     const square = getSquare(coords);
//     if(isBomb(square)) {
//         console.log('BOOM!')
//         console.log('You died');
//         revealGrid(grid);
//         process.exit()
//     } else {
//         square.hidden = false;
//         printGrid(grid);
//     }
// });

const getSquare = coords => {
    const row = coords.split('')[0];
    const column = coords.split('')[1];
    return grid[row][column];
}

const isBomb = square => {
    return square.value === bombSymbol;
} 