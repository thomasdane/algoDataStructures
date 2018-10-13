import {getNeighbours, findShortestPathLength, Point, transformGrid} from "../../algorithms/pathFinding.js"

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

    // it("should solve a 4x4 maze", () => {
    //     //arrange
    //     const expected = 6;
    //     const pointA = [0,0];
    //     const pointB = [3,3];

    //     //act
    //     const actual = findShortestPathLength(fourByFour, pointA, pointB);

    //     //assert
    //     expect(actual).toEqual(expected);
    // });
});

describe("getNeighbours", function() {
    const fourByFour = [
      [2, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 2]
    ];

    describe("when no edges or walls", () => {
        it("should return 4 neighbours", () => {
            //arrange
            const point = [1,1];
            const expected = [[1,0],[0,1],[1,2],[2,1]];
    
            //act
            const actual = getNeighbours(fourByFour, point[0], point[1]);
    
            //assert
            expect(actual).toEqual(expected);
        });
    });

    describe("when edge", () => {
        it("should return 2 neighbours for top left", () => {
            //arrange
            const point = [0,0];
            const expected = [[0,1],[1,0]];

            //act
            const actual = getNeighbours(fourByFour, point[0], point[1]);

            //assert
            expect(actual).toEqual(expected);
        });

        it("should return 2 neighbours for bottom right", () => {
            //arrange
            const point = [3,3];
            const expected = [[3,2],[2,3]];

            //act
            const actual = getNeighbours(fourByFour, point[0], point[1]);

            //assert
            expect(actual).toEqual(expected);
        });
    });
});