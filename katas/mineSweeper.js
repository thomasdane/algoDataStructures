//game

//generate grid

const generateGrid = (size, bombCount) => {
    
    const result = [];

    for(let i = 0; i < size; i++) {
        const row = new Array(size).fill(0);
        result.push(row);
    }

    return result;
}

const generateBombPositions = (size, bombCount) => {
    const result = [];
    const row = Math.floor(Math.random() * size + 1);
    const column = Math.floor(Math.random() * size);
    const callBack = () => console.log(row, column)
    timesDo(bombCount, callBack);
    return result;
}

const timesDo = (times, callback)=> {
    while(times-- > 0) callback();
}

const printGrid = grid => {
    grid.forEach(row => console.log(row));
}   

const grid = generateGrid(4);
const bombs = generateBombPositions(4, 4);
printGrid(grid);
console.log(bombs)

//show grid

//prompt user for input

//if bomb, return dead

//if 