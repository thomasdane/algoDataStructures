// REQUIREMENTS

// COMPLEXITY

// Time = n log n

// Space = 

// This is because we are halving the array at each step. 

// STEPS

//the base case is when there are 1 or 0 elements in the array
//choose a pivot
//create two arrays, to hold elements smaller or bigger than pivot
//for each element in the array, place it in the correct array
//for each of those arrays, call the quicksort function and concat the result with the pivot

function quickSort (array) {

    if (array.length <= 1)
        return array
    
    let pivot = array.splice(0, 1) //this removes the pivot from the original array
    let left = []
    let right = []

    array.map(x => x < pivot ? left.push(x) : right.push(x));

    return quickSort(left).concat(pivot).concat(quickSort(right));
}

const emptyArray = []
const arrayOneElement = [5]
const positiveArray = [5,1,3]
const negativeArray = [-4,-16,-3]
const word = ['a','c','b','e','d'] //js will sort these alphabetically

console.log(emptyArray + " => " + quickSort(emptyArray));
console.log(arrayOneElement + " => " + quickSort(arrayOneElement));
console.log(positiveArray + " => " + quickSort(positiveArray));
console.log(negativeArray + " => " + quickSort(negativeArray));
console.log(word + " => " + quickSort(word));

//Improvements to above algorithm

// It is destructive. Alters array passed in. 
// An alternative is to take the first or last element as the pivot,
// And loop over everything except that. 



