import {findMostCommonTitle} from "../../algorithms/graphs/graphs.js"
import {getUser} from "../../algorithms/graphs/getUser.js"

describe('findMostCommonTitle', function() {
// the getUser function and data comes from this CodePen: https://codepen.io/btholt/pen/NXJGwa?editors=0010
// I recommend finishing these one at a time. if you put an x in front of the it so the function call is 
// xit it will not run
    it('user 30 with 2 degrees of separation', () => {
        expect(findMostCommonTitle(30, getUser, 2)).toBe("Librarian");
    });

    it('user 11 with 3 degrees of separation', () => {
        expect(findMostCommonTitle(11, getUser, 3)).toBe("Graphic Designer");
    });

    it('user 307 with 4 degrees of separation', () => {
        // if you're failing here with "Clinical Specialist, you're probably not filtering users who
        // appear more than once in people's connections
        expect(findMostCommonTitle(306, getUser, 4)).toBe("Environmental Tech");
    });
    });

    // remove x from describe to run
    xdescribe('extra credit', function() {
    it('user 1 with 7 degrees of separation – this will traverse every user that\'s followed by someone else. five users are unfollowed', () => {
        expect(findMostCommonTitle(1, getUser, 7)).toBe("Geological Engineer");
    });
})