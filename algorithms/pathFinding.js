const NO_ONE = "0";
const BY_A = "A";
const BY_B = "B";

const transformGrid = grid => {
    return grid.map((row, rowIndex) => {
        return row.map((point, columnIndex) => {
            return new Point(rowIndex, columnIndex, point);
        });
    });
}

class Point {
    constructor (rowIndex, columnIndex, value){
        this.x = columnIndex;
        this.y = rowIndex;
        this.closed = value === 1;
        this.length = 0;
        this.openedBy = NO_ONE;
    }
}

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



const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
    const visited = transformGrid(maze);
    visited[yA][xA].openedBy = BY_A;
    visited[yB][xB].openedBy = BY_B;
  
    let aQueue = [visited[yA][xA]];
    let bQueue = [visited[yB][xB]];
    let iteration = 0;
  
    while (aQueue.length && bQueue.length) {
      iteration++;
      const aNeighbors = aQueue.reduce((acc, neighbor) => acc.concat(getNeighbours(visited, neighbor.x, neighbor.y)), [])
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
  
      const bNeighbors = bQueue.reduce((acc, neighbor) => acc.concat(getNeighbours(visited, neighbor.x, neighbor.y)), [])
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
    }
    return -1;
  };
  

// const fourByFour = [
//     [2, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 2]
//   ];

//   const pointA = [0,0];
//   const pointB = [3,3];
  
// console.log(findShortestPathLength(fourByFour, pointA, pointB));  




export { getNeighbours, 
         findShortestPathLength, 
         Point, 
         transformGrid
       };