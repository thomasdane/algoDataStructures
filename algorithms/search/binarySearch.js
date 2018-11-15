function findElementIndex1(needle, haystack) {
    
    let bottom = 0;
    let top = haystack.length - 1; 
    let result = -1;
    let middle;

    while(bottom < top){
        
        middle = Math.floor((bottom + top) / 2);
        element = haystack[middle];

        if(element === needle) {
            result = middle;
        } else if (element < needle) {
            bottom = middle + 1;
        } else {
            top = middle - 1;
        }
    }

    return result;
}

function findElementIndex (array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;

    while(min <= max) {
        guess = Math.floor((max + min) / 2);

        if (array[guess] === targetValue) {
            return guess;
        }
        else if (array[guess] < targetValue) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }

    }

    return -1;
}

let haystack = [1,2,3,4,5];
let needle = 5;


let expected = 4;
let actual = findElementIndex(needle, haystack);
console.log(actual)
console.log(actual == expected);

let needle1 = 'a';
let haystack2 = ['c','b','a'];
let expected2 = 2;
let actual2 = findElementIndex(needle1, haystack2);
console.log(actual2 == expected2);

needle = 5;
haystack = [1,2,3];
expected = -1;
actual = findElementIndex(needle, haystack);
console.log(actual === expected);
