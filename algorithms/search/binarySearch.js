function binarySearch(needle, haystack) {
    
    function recurse(needle, haystack, lowerBound, upperBound)
    { 
        const middleIndex = Math.floor(lowerBound + ((upperBound - lowerBound) / 2));
        const middleElement = haystack[middleIndex];

        if(needle === middleElement) return middleIndex;

        if (upperBound - lowerBound === 0) return -1;

        if (needle < middleElement) return recurse(needle, haystack, lowerBound, middleIndex);
        
        if(needle > middleElement) return recurse(needle, haystack, middleIndex + 1, upperBound);
    }

    return recurse(needle, haystack, 0, haystack.length - 1)
}

function binarySearchIterative(needle, haystack) {

    let lowerBound = 0;
    let upperBound = haystack.length - 1;
    
    while(lowerBound <= upperBound){

        const middle = (upperBound - lowerBound)/2;
        const middleIndex = Math.floor(middle + lowerBound);
        const middleElement = haystack[middleIndex];

        if(needle === middleElement) return middleIndex;

        if(needle < middleElement) {
            upperBound = middleIndex - 1
        } else {
            lowerBound = middleIndex + 1;
        }
    }

    return -1;
}

let needle = 5;
let haystack = [1,2,3,4,5];
let expected = 4;
let actual = binarySearch(needle, haystack);
console.log(actual === expected);

needle = 'a';
haystack = ['a','b','c'];
expected = 0;
actual = binarySearch(needle, haystack);
console.log(actual === expected);

needle = 5;
haystack = [1,2,3];
expected = -1;
actual = binarySearch(needle, haystack);
console.log(actual === expected);

needle = 5;
haystack = [1,2,3,4,5];
expected = 4;
actual = binarySearchIterative(needle, haystack);
console.log(actual === expected);

needle = 'a';
haystack = ['a','b','c'];
expected = 0;
actual = binarySearchIterative(needle, haystack);
console.log(actual === expected);

needle = 5;
haystack = [1,2,3];
expected = -1;
actual = binarySearchIterative(needle, haystack);
console.log(actual === expected);
