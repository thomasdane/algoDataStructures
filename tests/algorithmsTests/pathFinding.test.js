import {getNeighbours} from "../../algorithms/pathFinding.js"

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