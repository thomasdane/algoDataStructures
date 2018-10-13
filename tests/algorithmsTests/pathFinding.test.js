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
    //     const actual = findShortestPathLength(threeByThree, pointA, pointB);

    //     //assert
    //     expect(actual).toEqual(expected);
    // });
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
            const actual = getNeighbours(threeByThreeTransformed, 0, 1);

            //assert
            expect(actual).toEqual(expected);
        });
    });
});