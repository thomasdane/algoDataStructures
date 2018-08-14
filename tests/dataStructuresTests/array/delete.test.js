import {ArrayList} from '../../../dataStructures/array.js'

test('Delete_WhenIndexExists_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);

    //Act
    array.delete(0);

    //Assert
    expect(array.data).toBeNull;
});

test('Delete_WhenIndexDoesNotExist_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);

    //Act
    array.delete(10);

    //Assert
    expect(array.data[0]).toBe(1);
});

test('Delete_WhenLastElement_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);
    array.push(2);

    //Act
    array.delete(1);

    //Assert
    expect(array.data[0]).toBe(1);
});

test('Delete_WhenIndexZero_ShiftsOtherElementDown', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);
    array.push(2);

    //Act
    array.delete(0);

    //Assert
    expect(array.data[0]).toBe(2);
});