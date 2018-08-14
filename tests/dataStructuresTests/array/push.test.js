import {ArrayList} from '../../../dataStructures/array.js'

test('Push_WhenEmptyArrayAndValue_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();

    //Act
    array.push(1);

    //Assert
    expect(array.data[0]).toBe(1);
});

test('Push_WhenEmptyArrayAndNull_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();

    //Act
    array.push(null);

    //Assert
    expect(array.data).toEqual({});
});

test('Push_WhenArrayHasOneElement_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);

    //Act
    array.push(2);

    //Assert
    expect(array.data[1]).toEqual(2);
});

test('Push_WhenArrayHasThreeElements_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);
    array.push(2);
    array.push(3);

    //Act
    array.push(4);

    //Assert
    expect(array.data[3]).toEqual(4);
});