import LinkedList from '../../../dataStructures/linkedList.js';

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

