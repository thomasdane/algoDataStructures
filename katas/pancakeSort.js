/*
Pancake Sort
Given an array of integers
Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array. 
You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
*/

function pancakeSort(input) {
    if(!input) return [];

    function recurse(array, result) {

        if(!array.length) return result;

        const indexLargestElement = getindexLargestElement(array);

        let flipLargestToTop = flip(array, indexLargestElement + 1);

        let flipTopToBottom = flip(flipLargestToTop, array.length);

        const largest = flipTopToBottom.pop();
        result.unshift(largest);

        return recurse(flipTopToBottom, result)
    }

    return recurse(input, []);
};

function flip(arr, indexLargestElement) {
    const temp = [].concat(arr);
    const firstElements = temp.splice(0, indexLargestElement);
    const flipped = firstElements.reduceRight((b, a) => b.concat(a), []);
    return flipped.concat(temp);
}

function getindexLargestElement(array){
    
    if(!array.length) return [];

    let largest = Number.MIN_SAFE_INTEGER;
    let index = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] > largest){
            largest = array[i];
            index = i;
        }
    }
    
    return index;
}

// TESTS

const empty = [];
const one = [1];
const twoSorted = [1,2];
const twoUnsorted = [2,1];
const threeSorted = [1,2,3];
const threeUnsorted = [2,3,1];
const fiveSorted = [1,2,3,4,5];
const fiveUnsorted = [4,5,1,3,2];
const twoListInput = [1,2,3,4,4,3,2,1];

// PANCAKE SORT

let actual = pancakeSort(one);
let expected = one
console.log(isEqual(actual, expected));

actual = pancakeSort(twoSorted);
expected = twoSorted;
console.log(isEqual(actual, expected));

actual = pancakeSort(twoUnsorted);
expected = twoSorted;
console.log(isEqual(actual, expected));

actual = pancakeSort(threeSorted);
expected = threeSorted;
console.log(isEqual(actual, expected));

actual = pancakeSort(threeUnsorted);
expected = threeSorted;
console.log(isEqual(actual, expected));

actual = pancakeSort(fiveSorted);
expected = fiveSorted;
console.log(isEqual(actual, expected));

actual = pancakeSort(fiveUnsorted);
expected = fiveSorted;
console.log(isEqual(actual, expected));

actual = pancakeSort(twoListInput);
expected = [ 1, 1, 2, 2, 3, 3, 4, 4 ];
console.log(isEqual(actual, expected));

// FLIP

actual = flip(fiveSorted, 2);
expected = [2,1,3,4,5];
console.log(isEqual(actual, expected));

// GET LARGEST ELEMENT

actual = getindexLargestElement(empty);
expected = empty;
console.log(actual.length == expected.length);

actual = getindexLargestElement(one);
expected = 0;
console.log(actual === expected);

actual = getindexLargestElement(twoUnsorted);
expected = 0;
console.log(actual === expected);

actual = getindexLargestElement(threeSorted);
expected = 2;
console.log(actual === expected);

actual = getindexLargestElement(fiveUnsorted);
expected = 1;
console.log(actual === expected);

function isEqual(array1, array2){

    if(array1.length !== array2.length) return false;
    
    let result = true;
    
    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]) result = false;
    }

    return result;
}

