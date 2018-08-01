import LinkedList from '../../dataStructures/linkedList.js';

test('Push_WhenEmptyList_ThenUpdatesHead', () => {
    let emptyList = new LinkedList();
    emptyList.push(1);
    expect(emptyList.head.value).toEqual(1);
});

test('Push_WhenEmptyList_ThenUpdatesHead', () => {
    let emptyList = new LinkedList();
    emptyList.push(1);
    expect(emptyList.tail.value).toEqual(1);
});

test('Push_WhenNotEmptyList_ThenUpdatesTail', () => {
    let list = new LinkedList();
    
    list.push(1);
    list.push(2);
    
    expect(list.tail.value).toEqual(2);
});

test('Find_WhenValueExists_ReturnsTrue', () => {
    //Arrange
    let list = new LinkedList();
    
    //Act
    list.push(1);
    list.push(2);

    //Assert
    expect(list._find(2, list.head)).toEqual(2);
});

test('Delete_WhenEmptyList_ThenFalse', () => {
    //Arrange
    let list = new LinkedList();

    //Act
    var actual = list.delete(1, list.head);
    
    //Assert
    expect(actual).toEqual(false);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
});

test('Delete_WhenEmptyList_ThenFalse', () => {
    //Arrange
    let list = new LinkedList();

    //Act
    var actual = list.delete(1, list.head);
    
    //Assert
    expect(actual).toEqual(false);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
});

