import incrementArray from '../../../algoDataStructuresJS/katas/incrementArray.js';

test("WhenOneItem_ThenIncrements", () => {
    //Arrange
    const input = [1];

    //Act
    const result = incrementArray(input);

    //Assert
    expect(result).toEqual([2]);
});

test("WhenTwoItem_ThenIncrements", () => {
    //Arrange
    const input = [1,2];

    //Act
    const result = incrementArray(input);

    //Assert
    expect(result).toEqual([1,3]);
});

test("WhenFourItem_ThenIncrements", () => {
    //Arrange
    const input = [1,5,3,4];

    //Act
    const result = incrementArray(input);

    //Assert
    expect(result).toEqual([1,5,3,5]);
});

test("WhenNine_ThenOneAndZero", () => {
    //Arrange
    const input = [9];

    //Act
    const result = incrementArray(input);

    //Assert
    expect(result).toEqual([1,0]);
});

test("WhenNineteen_ThenTwenty", () => {
    //Arrange
    const input = [1,9];

    //Act
    const result = incrementArray(input);

    //Assert
    expect(result).toEqual([2,0]);
});

test("WhenNinetyNine_ThenOneHundred", () => {
    //Arrange
    const input = [9,9];

    //Act
    const result = incrementArray(input);

    //Assert
    expect(result).toEqual([1,0,0]);
});

