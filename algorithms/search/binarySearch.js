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
