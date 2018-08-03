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