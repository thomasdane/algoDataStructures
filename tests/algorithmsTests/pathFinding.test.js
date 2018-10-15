import {getNeighbours, findShortestPathLength, Point, transformGrid} from "../../algorithms/pathFinding.js"

describe("findShortestPathLength", () => {

    const fourByFour = [
        [2, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2]
    ];

    it("should solve a 4x4 maze", () => {
        expect(findShortestPathLength(fourByFour, [0, 0], [3, 3])).toEqual(6);
    });

    const sixBySix = [
        [0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0]
    ];

    it("should solve a 6x6 maze", () => {
        expect(findShortestPathLength(sixBySix, [1, 1], [2, 5])).toEqual(7);
    });
    
      const eightByEight = [
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 2, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 2]
      ];

      it("should solve a 8x8 maze", () => {
        expect(findShortestPathLength(eightByEight, [1, 7], [7, 7])).toEqual(16);
      });
    
      const fifteenByFifteen = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0,],
        [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0,],
        [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0,],
        [0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 0,],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0,],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0,],
        [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0,],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
      ]

      it("should solve a 15x15 maze", () => {
        expect(findShortestPathLength(fifteenByFifteen, [1, 1], [8, 8])).toEqual(78);
      });
});
    
   
describe("pathfinding – edge cases", function() {
    const byEachOther = [
    [0, 0, 0, 0, 0],
    [0, 2, 2, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    ];
    
    it("should solve the maze if they're next to each other", () => {
    expect(findShortestPathLength(byEachOther, [1, 1], [2, 1])).toEqual(1);
    });

    const impossible = [
    [0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 2],
    ];

    it("should return -1 when there's no possible path", () => {
    expect(findShortestPathLength(impossible, [1, 1], [4, 4])).toEqual(-1);
    });
});
    


describe("transform grid", () => {

    const twoByTwo = [
        [0,0],
        [1,0]
    ];

    it("should transform a grid", () => {
        //arrange
        const topLeft = new Point(0,0,0);
        const topRight = new Point(0,1,0);
        const bottomLeft = new Point(1,0,1);
        const bottomRight = new Point(1,1,0);
        const expected = [
            [topLeft, topRight],
            [bottomLeft, bottomRight]
        ];

        //act
        var actual = transformGrid(twoByTwo);

        //assert
        expect(actual).toEqual(expected);

    });
});

describe("getNeighbours", function() {
    const threeByThree = [
      [2, 0, 0],
      [0, 1, 0],
      [0, 0, 2]
    ];

    const threeByThreeTransformed = transformGrid(threeByThree);

    const topLeft = new Point(0,0,2);
    const topMiddle = new Point(0,1,0);
    const topRight = new Point(0,2,0);
    const leftMiddle = new Point(1,0,0);
    const rightMiddle = new Point(1,2,0);
    const bottomMiddle = new Point(2,1,0);


    describe("when no edges or walls", () => {
        it("should return 4 neighbours", () => {
            //arrange
            var expected = [leftMiddle, topMiddle, rightMiddle, bottomMiddle];
            
            //act
            const actual = getNeighbours(threeByThreeTransformed, 1, 1);

            //assert
            expect(actual).toEqual(expected);
        });
    });

    describe("when edge", () => {
        it("should return exclude out of bounds", () => {
            //arrange
            const expected = [topMiddle,leftMiddle];

            //act
            const actual = getNeighbours(threeByThreeTransformed, 0, 0);

            //assert
            expect(actual).toEqual(expected);
        });
    });

    describe("when wall", ()=> {
        it("should exclude the wall from neighbours", () => {
            //arrange
            const expected = [topLeft, topRight];

            //act
            const actual = getNeighbours(threeByThreeTransformed, 1, 0);

            //assert
            expect(actual).toEqual(expected);
        });
    });
});