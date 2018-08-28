import LinkedList from '../../../dataStructures/linkedList.js';

describe("Shift", () => {

    test('WhenEmptyList_ThenNull', () => {
        let emptyList = new LinkedList();
    
        const result = emptyList.shift();
        
        expect(result).toBeNull();
    });
    
    test('WhenOneNode_ThenUpdatesHeadAndReturnsNode', () => {
        let list = new LinkedList();
        list.push(1);

        const result = list.shift();
    
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(result.value).toBe(1);
    });
    
    test('WhenThreeNodes_ReturnsCorrectNodeAndRestOfList', () => {
        let list = new LinkedList();
        list.push(1);
        list.push(2);
        list.push(3);

        const result = list.shift();
        
        expect(result.value).toBe(1);
        expect(list.head.value).toBe(2);
        expect(list.tail.value).toBe(3);
    });
});
