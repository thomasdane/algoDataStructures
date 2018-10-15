class Point {
    constructor (row, column, value){
        this.x = column;
        this.y = row;
        this.closed = value === 1;
        this.length = 0;
        this.openedBy = NO_ONE;
    }
}

const transformGrid = grid => {
    return grid.map((row, rowIndex) => {
        return row.map((point, columnIndex) => {
            return new Point(rowIndex, columnIndex, point);
        });
    });
}

const NO_ONE = "0";
const BY_A = "A";
const BY_B = "B";

const getNeighbours = (grid, column, row) => {
    const results = [];
    const left = column-1;
    const above = row-1;
    const right = column+1;
    const below = row+1;

    if(left >= 0 && !grid[row][left].closed){
        var leftPoint = grid[row][left];
        results.push(leftPoint);
    }

    if(above >= 0 && !grid[above][column].closed) {
        var abovePoint = grid[above][column];
        results.push(abovePoint);
    }

    if(right <= grid.length - 1 && !grid[row][right].closed) {
        var rightPoint = grid[row][right];
        results.push(rightPoint);
    }
    
    if(below <= grid.length - 1 && !grid[below][column].closed) {
        var belowPoint = grid[below][column];
        results.push(belowPoint);
    }

    return results;
}

const getAllNeighbours = (neighbourQueue, grid) => {
    return neighbourQueue.reduce((acc, neighbor) => acc.concat(getNeighbours(grid, neighbor.x, neighbor.y)), [])
}


const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
    
    const visited = transformGrid(maze);

    const pointA = visited[yA][xA];
    const pointB = visited[yB][xB];

    pointA.openedBy = BY_A;
    pointB.openedBy = BY_B;
  
    let aQueue = [pointA];
    let bQueue = [pointB];
    let iteration = 0;
  
    const recurse = () => {

        if(aQueue.length === 0 || bQueue.length === 0) return -1;

        iteration++;
        
        const aNeighbors = getAllNeighbours(aQueue, visited);
        aQueue = [];

        for (let i = 0; i < aNeighbors.length; i++) {
            const neighbor = aNeighbors[i];

            if (neighbor.openedBy === BY_B) {
                return neighbor.length + iteration;
            } else if (neighbor.openedBy === NO_ONE) {
                neighbor.length = iteration;
                neighbor.openedBy = BY_A;
                aQueue.push(neighbor);
            }
        }

        const bNeighbors = getAllNeighbours(bQueue, visited);
        bQueue = [];

        for (let i = 0; i < bNeighbors.length; i++) {
            const neighbor = bNeighbors[i];

            if (neighbor.openedBy === BY_A) {
                    return neighbor.length + iteration;
            } else if (neighbor.openedBy === NO_ONE) {
                neighbor.length = iteration;
                neighbor.openedBy = BY_B;
                bQueue.push(neighbor); 
            }
        }

        return recurse();
    }

    return recurse();
};
  
export { getNeighbours, 
         findShortestPathLength, 
         Point, 
         transformGrid
       };