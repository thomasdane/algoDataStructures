import hashCode from '../../../dataStructures/hashTable.js';

test("WhenSameInput_ThenSameOutput", () => {

    //Arrange
    const firstInput = "foobar";
    const secondInput = "foobar";

    //Act
    const firstOutput = hashCode(firstInput);
    const secondOutput = hashCode(secondInput);

    //Assert
    expect(firstOutput).toEqual(secondOutput);
});

// test("WhenDifferentInput_ThenDifferentOutput", () => {

//     //Arrange
//     const firstInput = "foo";
//     const secondInput = "bar";

//     //Act
//     const firstOutput = hashCode(firstInput);
//     const secondOutput = hashCode(secondInput);

//     //Assert
//     expect(firstOutput != secondOutput).toBe(true);
// });