import hashCode from '../../../dataStructures/hashTable.js';

test("WhenSameInput_ThenSameOutput", () => {

    //Arrange
    const firstInput = "foobar";
    const secondInput = "foobar";

    //Act
    const firstOutput = hashCode(firstInput,10);
    const secondOutput = hashCode(secondInput,10);

    //Assert
    expect(firstOutput).toEqual(secondOutput);
});

test("WhenDifferentInput_ThenDifferentOutput", () => {

    //Arrange
    const firstInput = "foo";
    const secondInput = "bar";

    //Act
    const firstOutput = hashCode(firstInput,256);
    const secondOutput = hashCode(secondInput,256);

    //Assert
    expect(firstOutput != secondOutput).toBe(true);
});

test("WhenMaxValue_HashLessThanMaxValue", () => {

    //Arrange
    const firstInput = "foo";

    //Act
    const firstOutput = hashCode(firstInput,5);

    //Assert
    expect(firstOutput).toBeLessThan(5);
});