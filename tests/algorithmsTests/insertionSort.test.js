import insertionSort from '../../algorithms/insertionSort.js';

let empty = []; 
let oneItem = [1]; 
let twoItems = [2,1]; 
let fiveItems = [3, 5, 4, 1, 2]; 
let negative = [-3, -1, -2]; 

// test('Empty array', () => {
//     expect(insertionSort(empty)).toEqual(empty);
// });

// test('One item', () => {
//     expect(insertionSort(oneItem)).toEqual(oneItem);
// });

// test('Two items', () => {
//     expect(insertionSort(twoItems)).toEqual([1,2]);
// });

test('Five items', () => {
    expect(insertionSort(fiveItems)).toEqual([1,2,3,4,5]);
});

// test('Negative numbers', () => {
//     expect(insertionSort(negative)).toEqual([-3,-2,-1]);
// });