/*

Given an undirected graph with maximum degree D, 
find a graph coloring using at most D+1 colors.

It takes in an array of graph nodes. 
Each graph node contains a value, a color, and a set of neighbours. 
Each set contains other nodes. 

*/
const colorGraph = (graph, colors) => {

    //we can colour with at most 
    

}

const red = "red";
const blue = "blue";
const yellow = "yellow";
const green = "green";
const none = "none";

class Node {
    constructor(value) {
        this.value = value;
        this.neighbors = new Set();
        this.color = none;
    }
}

const isValid = graph => {

    //every node has a color
    var a = everyNodeHasColor();

    //the number of colours used does not exceed the max edges
    var b = correctNumberColors();

    //no node has the same colour as a neighbour
}

//tested
const correctNumberColors = graph => {

    let colors = new Set();
    let maxNeighborCount = 0;

    graph.forEach(node => {
        colors.add(node.color);
        const neighborCount = getNeighbors(node).length;
        maxNeighborCount = Math.max(neighborCount, maxNeighborCount);
    });

    return colors.size <= maxNeighborCount + 1;
}

//tested
const everyNodeHasColor = graph => {
    
    return graph.filter(node => node.color === none).length < 1;
}

//tested
const getNeighbors = node => {
    return [...node.neighbors];
}

const getMaxNeighbors = node 


const getColours = neighbours => {  //an array of neighbours
    const maxDegree = 0;
    const usedColours = [];

    nodes.forEach(element => {
        maxDegree = Math.max(maxDegree, node.neighbors.size);
    })

}


/*

GET NEIGHBORS

*/

// When 0 neighbours, get neighbours should return empty array
//arrange
var expected = 0;
var node = new Node(7);
//act
let actual = getNeighbors(node).length;
//assert
console.log(actual == expected);

//When 1 neighbor, get neighbors returns 1 element
//arrange
expected = new Node(5);
node = new Node(1);
node.neighbors.add(expected);
//act
actual = getNeighbors(node);
//assert
console.log(actual.length === 1);
console.log(actual[0].value === expected.value)

//When 2 neighbor, get neighors returns both
expectedA = new Node(5);
expectedB = new Node(4);
node = new Node(1);
node.neighbors.add(expectedA);
node.neighbors.add(expectedB);
//act
actual = getNeighbors(node);
//assert
console.log(actual.length === 2);
console.log(actual[0].value === expectedA.value)
console.log(actual[1].value === expectedB.value)

/*

ALL COLORED

*/

//When all colored, get neighors returns true
expectedA = new Node(5);
expectedA.color = "blue";
expectedB = new Node(4);
expectedB.color = "red";
graph = [expectedA, expectedB];
//act
actual = everyNodeHasColor(graph);
//assert
console.log(actual == true);


//When one not colored, get neighors returns false
expectedA = new Node(5);
expectedA.color = "blue";
expectedB = new Node(4);
graph = [expectedA, expectedB];
//act
actual = everyNodeHasColor(graph);
//assert
console.log(actual == false);

/*

CORRECT COLOR COUNT

*/

//When 3 neigbors and 4 colors, returns true
a = new Node(5);
b = new Node(4);
c = new Node(3);
node = new Node(2);
a.color = blue;
b.color = red;
c.color = yellow;
node.color = green;
node.neighbors.add(a);
node.neighbors.add(b);
node.neighbors.add(c);
graph = [node, a, b, c];
//act
actual = correctNumberColors(graph);
//assert
console.log(actual);

//When 2 neigbors and 4 colors, returns true
a = new Node(5);
b = new Node(4);
c = new Node(3);
node = new Node(2);
a.color = blue;
b.color = red;
c.color = yellow;
node.color = green;
node.neighbors.add(a);
node.neighbors.add(b);
graph = [node, a, b, c];
//act
actual = correctNumberColors(graph);
//assert
console.log(actual === false);


//     int maxDegree = 0;
//     final Set<String> usedColors = new HashSet<>();

//     for (final GraphNode node : graph) {
//         final Set<GraphNode> neighbors = node.getNeighbors();
//         maxDegree = Math.max(maxDegree, neighbors.size());
//         usedColors.add(node.getColor());
//     }

//     final int allowedColorCount = maxDegree + 1;

//     if (usedColors.size() > allowedColorCount) {
//         fail(String.format("Too many colors: %d allowed, but %d actually used",
//                            allowedColorCount, usedColors.size()));
//     }

//     for (final GraphNode node : graph) {
//         final Set<GraphNode> neighbors = node.getNeighbors();
//         for (final GraphNode neighbor: neighbors) {
//             if (neighbor.getColor().equals(node.getColor())) {
//                 fail(String.format("Neighbor nodes %s and %s have the same color %s",
//                                    node.getLabel(), neighbor.getLabel(), node.getColor()));
//             }
//         }
//     }
// }


//Tests

//Graph with single node

//Arrange
//let a = new GraphNode("a");

//Act

//actual = colorGraph([a], colours);

//Assert


// a = new GraphNode("a");
// var b = new GraphNode("b");
// var c = new GraphNode("c");

// a.neighbors.add(b);
// b.neighbors.add(a);
// c.neighbors.add(b);
// b.neighbors.add(c);

// var graph = [a, b, c];
