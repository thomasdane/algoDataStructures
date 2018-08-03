import quickSort from '../../algorithms/quickSort.js';

let empty = []; 
let oneItem = [1]; 
let twoItems = [2,1]; 
let fiveItems = [3, 5, 4, 1, 2]; 
let negative = [-3, -1, -2]; 
let chars = ['c', 'b', 'a']; 

test('Empty array', () => {
    expect(quickSort(empty)).toEqual(empty);
});

test('One item', () => {
    expect(quickSort(oneItem)).toEqual(oneItem);
});

test('Two items', () => {
    expect(quickSort(twoItems)).toEqual([1,2]);
});

test('Five items', () => {
    expect(quickSort(fiveItems)).toEqual([1,2,3,4,5]);
});

test('Negative numbers', () => {
    expect(quickSort(negative)).toEqual([-3,-2,-1]);
});

test('Characters', () => {
    expect(quickSort(chars)).toEqual(['a','b','c']);
});