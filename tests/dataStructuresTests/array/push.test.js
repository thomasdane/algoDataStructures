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

test('Get_WhenIndexExists_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);

    //Act
    const actual = array.get(0);

    //Assert
    expect(actual).toBe(1);
    expect(array.data[0]).toBe(1);
});

test('Get_WhenIndexExists_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);

    //Act
    const actual = array.get(10);

    //Assert
    expect(actual).toBeNull;
    expect(array.data[0]).toBe(1);
});

test('Delete_WhenIndexExists_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);

    //Act
    array.delete(0);

    //Assert
    expect(array.data).toBeNull;
});

test('Delete_WhenIndexExists_ReturnsCorrectData', () => {
    //Arrange
    var array = new ArrayList();
    array.push(1);

    //Act
    array.delete(10);

    //Assert
    expect(array.data[0]).toBe(1);
});

// test('Delete_WhenIndexExists_ReturnsCorrectData', () => {
//     //Arrange
//     var array = new ArrayList();
//     array.push(1);
//     array.push(2);

//     //Act
//     array.delete(0);

//     //Assert
//     expect(array.data[0]).toBe(2);
// });