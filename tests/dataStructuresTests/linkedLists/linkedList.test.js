import LinkedList from '../../../dataStructures/linkedList.js';

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

/////////////// FIND /////////////////////////////////

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


////////////// DELETE ////////////////////

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

test('Delete_WhenOneItemNoMatches_ThenFalse', () => {
    //Arrange
    let list = new LinkedList();
    list.push(1);

    //Act
    var actual = list.delete(2, list.head);
    
    //Assert
    expect(actual).toBe(false);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    expect(list.head.next).toBe(null);
});

test('Delete_WhenOneItemMatches_ThenTrueAndEmptyList', () => 
{
    //Arrange
    let list = new LinkedList();
    list.push(1);

    //Act
    var actual = list.delete(1, list.head);
    
    //Assert
    expect(actual).toBe(true);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
});

test('Delete_WhenTwoItemsNoMatch_ThenFalse', () => 
{
    //Arrange
    let list = new LinkedList();
    list.push(1);
    list.push(2);

    //Act
    var actual = list.delete(3, list.head);
    
    //Assert
    expect(actual).toBe(false);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(2);
    expect(list.head.next).toBe(list.tail);
});

// test('Delete_WhenTwoItemsMatchHead_ThenTrueAndTail', () => 
// {
//     //Arrange
//     let list = new LinkedList();
//     list.push(1);
//     list.push(2);

//     //Act
//     var actual = list.delete(1, list.head);
    
//     //Assert
//     expect(actual).toBe(true);
//     expect(list.head.value).toBe(2);
//     expect(list.tail.value).toBe(2);
//     expect(list.head.next).toBe(null);
// });

// test('Delete_WhenTwoItemsMatchTail_ThenTrueAndHead', () => 
// {
//     //Arrange
//     let list = new LinkedList();
//     list.push(1);
//     list.push(2);

//     //Act
//     var actual = list.delete(2, list.head);
    
//     //Assert
//     expect(actual).toBe(true);
//     expect(list.head.value).toBe(2);
//     expect(list.tail.value).toBe(2);
//     expect(list.head.next).toBe(null);
// });

