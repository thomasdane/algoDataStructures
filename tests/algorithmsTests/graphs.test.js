import {findMostCommonTitle} from "../../algorithms/graphs/graphs.js"
import {getUser} from "../../algorithms/graphs/getUser.js"

describe('findMostCommonTitle', function() {

    it('user 30 with 2 degrees of separation', () => {
        //arrange
        const userId = 30;
        const degrees = 2;
        const expected = "Librarian";

        //act
        const actual = findMostCommonTitle(userId, getUser, degrees);

        //assert
        expect(actual).toBe(expected);
    });

    it('user 11 with 3 degrees of separation', () => {
          //arrange
          const userId = 11;
          const degrees = 3;
          const expected = "Graphic Designer";
  
          //act
          const actual = findMostCommonTitle(userId, getUser, degrees);
  
          //assert
          expect(actual).toBe(expected);
    });

    it('user 307 with 4 degrees of separation', () => {
          //arrange
          const userId = 306;
          const degrees = 4;
          const expected = "Environmental Tech";
  
          //act
          const actual = findMostCommonTitle(userId, getUser, degrees);
  
          //assert
          expect(actual).toBe(expected);
    });
});

describe('extra credit', function() {
    it('user 1 with 7 degrees of separation', () => {
        //arrange
        const userId = 1;
        const degrees = 7;
        const expected = "Geological Engineer";

        //act
        const actual = findMostCommonTitle(userId, getUser, degrees);

        //assert
        expect(actual).toBe(expected);
    });
})