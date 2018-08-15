import LinkedList from '../../../dataStructures/linkedList.js';

test('deleteValue_WhenEmptyList_ThenFalse', () => {
    //Arrange
    let list = new LinkedList();

    //Act
    var actual = list.deleteValue(1);
    
    //Assert
    expect(actual).toEqual(false);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
});

test('deleteValue_WhenOneItemNoMatches_ThenFalse', () => {
    //Arrange
    let list = new LinkedList();
    list.push(1);

    //Act
    var actual = list.deleteValue(2);
    
    //Assert
    expect(actual).toBe(false);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    expect(list.head.next).toBe(null);
});

test('deleteValue_WhenOneItemMatches_ThenTrueAndEmptyList', () => 
{
    //Arrange
    let list = new LinkedList();
    list.push(1);

    //Act
    var actual = list.deleteValue(1);
    
    //Assert
    expect(actual).toBe(true);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
});

test('deleteValue_WhenTwoItemsNoMatch_ThenFalse', () => 
{
    //Arrange
    let list = new LinkedList();
    list.push(1);
    list.push(2);

    //Act
    var actual = list.deleteValue(3);
    
    //Assert
    expect(actual).toBe(false);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(2);
    expect(list.head.next).toBe(list.tail);
});

test('deleteValue_WhenTwoItemsMatchHead_ThenTrueAndTail', () => 
{
    //Arrange
    let list = new LinkedList();
    list.push(1);
    list.push(2);

    //Act
    var actual = list.deleteValue(1);
    
    //Assert
    expect(actual).toBe(true);
    expect(list.head.value).toBe(2);
    expect(list.tail.value).toBe(2);
    expect(list.head.next).toBe(null);
});

test('deleteValue_WhenTwoItemsMatchTail_ThenTrueAndHead', () => 
{
    //Arrange
    let list = new LinkedList();
    list.push(1);
    list.push(2);

    //Act
    var actual = list.deleteValue(2);
    
    //Assert
    expect(actual).toBe(true);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    expect(list.head.next).toBe(null);
});

test('deleteValue_WhenThreeItemsAndMatchTail_ThenTrue', () => 
{
    //Arrange
    let list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);

    //Act
    var actual = list.deleteValue(3);
    
    //Assert
    expect(actual).toBe(true);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(2);
    expect(list.head.next).toBe(list.tail);
});

