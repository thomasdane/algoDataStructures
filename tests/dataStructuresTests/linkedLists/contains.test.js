import LinkedList from '../../../dataStructures/linkedList.js';

test('Contains_WhenValueExists_ReturnsTrue', () => {
    //Arrange
    let list = new LinkedList();
    
    //Act
    list.push(1);

    //Assert
    expect(list.contains(1, list.head)).toBe(true);
});

test('Contains_WhenValueDoesNotExist_ReturnsFalse', () => {
    //Arrange
    let list = new LinkedList();
    
    //Act
    list.push(1);

    //Assert
    expect(list.contains(2, list.head)).toBe(false);;
});