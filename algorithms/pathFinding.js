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
    constructor (row, column, value){
        this.x = column;
        this.y = row;
        this.closed = value === 1;
        this.distance = 0;
        this.openedBy = NO_ONE;
        this.value = value;
    }
}

const getNeighbours = (grid, y, x) => {
    const results = [];
    const left = x-1;
    const above = y-1;
    const right = x+1;
    const below = y+1;

    if(left >= 0 && !grid[y][left].closed){
        var leftPoint = grid[y][left];
        results.push(leftPoint);
    }

    if(above >= 0 && !grid[above][x].closed) {
        var abovePoint = grid[above][x];
        results.push(abovePoint);
    }

    if(right <= grid.length - 1 && !grid[y][right].closed) {
        var rightPoint = grid[y][right];
        results.push(rightPoint);
    }
    
    if(below <= grid.length - 1 && !grid[below][x].closed) {
        var belowPoint = grid[below][x];
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