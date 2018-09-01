const hanoi = (disc) => {

    const result = [];

    const recurse = (disc, src, aux, dst) => {
        if(disc < 1) return;

        recurse(disc - 1, src, dst, aux);
        result.push(disc,src,dst);
        recurse(disc - 1, aux, src, dst);
    }

    recurse(disc, 'Start', 'Spare', 'End');
    return result;
}

const t1 = "Start";
const t2 = "Spare";
const t3 = "End";

const AreEqual = (array1, array2) => {
    if(array1.length != array2.length) return false;

    const matches = array1.filter(element => array2.includes(element));
    console.log(matches.length == array1.length);
}

//Arrange
const OneExpected = [1,t1, t3];

//Act
const OneActual = hanoi(1);

//Assert
AreEqual(OneActual, OneExpected);