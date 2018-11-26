import mergeSort from '../../algorithms/sorting/mergeSort.js';

let empty = []; 
let oneItem = [1]; 
let twoItems = [2,1]; 
let fiveItems = [3, 5, 4, 1, 2]; 
let negative = [-3, -1, -2]; 

test('Empty array', () => {
    expect(mergeSort(empty)).toEqual(empty);
});

test('One item', () => {
    expect(mergeSort(oneItem)).toEqual(oneItem);
});

test('Two items', () => {
    expect(mergeSort(twoItems)).toEqual([1,2]);
});

test('Five items', () => {
    expect(mergeSort(fiveItems)).toEqual([1,2,3,4,5]);
});

test('Negative numbers', () => {
    expect(mergeSort(negative)).toEqual([-3,-2,-1]);
});