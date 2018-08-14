import {ArrayList} from '../../../dataStructures/array.js'

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