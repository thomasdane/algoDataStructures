const start = "Start";
const spare = "Spare";
const end = "End";

const hanoi = disc => {

    const result = [];

    const recurse = (disc, start, spare, end) => {

        if(disc < 1) return;

        recurse(disc - 1, start, end, spare); //take whats on start, and using end, move it to spare
        recurse(disc - 1, spare, start, end); //take whats on spare, and using start, move it to end
        result.push(disc, start, end);

    }

    recurse(disc, start, spare, end);
    return result;
}


const AreEqual = (array1, array2) => {
    if(array1.length != array2.length) return false;

    const matches = array1.filter(element => array2.includes(element));
    console.log(matches.length == array1.length);
}

//////////////////////// TESTS ///////////////////////////

//Arrange
const threeExpected = [ 1, start, end,   // _23_ __ _1_
                        2, start, spare, // _3_ _2_ _1_
                        1, end, spare,   // _3_ _12_ __
                        3, start, end,   // _ _ _12_ _3_
                        1, spare, start, // _1_ _2_ _3_
                        2, spare, end,   // _1_ __ _23_
                        1, start, end ]  // __ __ _123_

//Act
const threeActual = hanoi(3);

//Assert
AreEqual(threeExpected, threeActual);

//////////////////////////////////////////////////////////

//Arrange
const twoExpected = [ 1,start,spare,
                      2,start,end,
                      1,spare,end ]

//Act
const twoActual = hanoi(2);

//Assert
AreEqual(twoExpected, twoActual)

///////////////////////////////////////////////////////////

//Arrange
const OneExpected = [1,start, end];

//Act
const OneActual = hanoi(1);

//Assert
AreEqual(OneActual, OneExpected);