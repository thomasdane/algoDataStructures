import {ArrayList} from '../../../dataStructures/array.js'

test('Pop_WhenArrayHasThreeElements_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);
    array.push(2);
    array.push(3);

    //Act
    const actual = array.pop();

    //Assert
    expect(actual).toEqual(3);
    expect(array.data[3]).toBeNull;
});

test('Pop_WhenArrayHasOneElement_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);

    //Act
    const actual = array.pop();

    //Assert
    expect(actual).toEqual(1);
    expect(array.data).toBeNull;
});

test('Pop_WhenArrayIsEmpty_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();

    //Act
    const actual = array.pop();

    //Assert
    expect(actual).toBeNull;
    expect(array.data).toBeNull;
});
