import {getNeighbours} from "../../algorithms/pathFinding.js"

describe("getNeighbours", function() {
    const fourByFour = [
      [2, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 2]
    ];

    it("should return 4 neighbours", () => {
        //arrange
        const point = fourByFour[1][1];
        const expected = [0, 0, 0, 0];

        //act
        const actual = getNeighbours(fourByFour, point);

        //assert
        expect(actual).toEqual(expected);
    });
});