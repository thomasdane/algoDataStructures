const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

class Point {
    constructor (row, column, value){
        this.column = column;
        this.row = row;
        this.closed = value === 1;
        this.length = 0;
        this.visitedBy = NO_ONE;
    }
}

const transformGrid = grid => {
    return grid.map((row, rowIndex) => {
        return row.map((point, columnIndex) => {
            return new Point(rowIndex, columnIndex, point);
        });
    });
}

const findShortestPathLength = (grid, [xA, yA], [xB, yB]) => {

  const gridDatastructure = transformGrid(grid);

};

const getNeighbours = (grid, y, x) => {
    const results = [];
    const left = x-1;
    const above = y-1;
    const right = x+1;
    const below = y+1;

    if(left >= 0){
        var leftPoint = [y, left];
        results.push(leftPoint);
    }

    if(above >= 0) {
        var abovePoint = [above, x];
        results.push(abovePoint);
    }

    if(right <= grid.length - 1) {
        var rightPoint = [y, right];
        results.push(rightPoint);
    }
    
    if(below <= grid.length - 1) {
        var belowPoint = [below, x];
        results.push(belowPoint);
    }

    return results;
}

export  {
            getNeighbours, 
            findShortestPathLength, 
            Point, 
            transformGrid
        };