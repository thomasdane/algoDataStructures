import {hanoi} from '../towersHanoi.js'

describe("hanoi", () => {

    const t1 = "start";
    const t2 = "spare";
    const t3 = "end";

    test('WhenEmptyList_ThenNull', () => {
        //Arrange
        const OneExpected = [1,t1, t3];

        //Act

        const OneActual = hanoi(1);

        //Assert
        expect(OneActual).toEqual(OneExpected);
    });
});



  //one disc = start to end
  //two discs = first to spare. second to end. first to end.
  //three discs = I don't need to know. I just know that it is the same as two disks.  

  //When 1, then [1,start,end]
  //When 2, then [1,start,spare],[2,start,end],[1,spare,end]






//Notes

//Would be useful to learn how to map over an array of arrays. How does Haskell do it? Pretty useful. 