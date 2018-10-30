class Square {
    constructor(value, row, column){
        this.hidden = true;
        this.value = value;
        this.row = row;
        this.column = column;
    }
}

const getRandomIndex = size => Math.floor(Math.random() * size);
const createRow = (size, row) => createSquares(size, row);

const createSquares = (size, row) => {
    const squares = [];
    for(i = 0; i < size; i++){
        const square = new Square(0, row, i);
        squares.push(square);
    }
    return squares;
}

const generateGrid = (size) => {
    const grid = [];
    for(let i = 0; i < size; i++) {
        const row = createRow(size, i);
        grid.push(row);
    }
    return grid;
}

const generateBombPositions = (size, bombCount) => {
    const bombs = [];
    for(let i = 0; i < bombCount; i++) {
        const bomb = generateBombPosition(size);
        bombs.push(bomb);
    }
    return bombs;
}

const generateBombPosition = size => {
    const row = getRandomIndex(size);
    const column = getRandomIndex(size);
    return [row, column];
}

const generateGridWithBombs = (grid, bombs) => {
    const temp = grid.map(row => [...row]);

    bombs.forEach(bomb => {
        row = bomb[0];
        column = bomb[1];
        temp[row][column].value = '!';
    });

    return temp;
}


const printGrid = grid => {
    grid.forEach(row => {
        const result = [];

        row.forEach(square => {
            if(square.hidden === true) {
                console.log(square)
                result.push('#')
            } else {
                console.log(square)
                result.push(square.value)
            }
        });

        console.log(result);
    });
}   

const grid = generateGrid(4);
const bombs = generateBombPositions(4, 4);
const gridWithBombs = generateGridWithBombs(grid, bombs);

//printGrid(grid);
//console.log(bombs)
printGrid(gridWithBombs);

//show grid

//prompt user for input

//if bomb, return dead

//if 