// REQUIREMENTS

// COMPLEXITY

// Time = n log n

// Space = 

// This is because we are halving the array at each step. 

// STEPS

//first choose a pivot
//create two arrays, to hold elements less or greater than pivot
//for each element in the array, place it in the correct array
//for each of those arrays, call the quicksort function and concat the result with the pivot
//the base case is when there are 1 or 0 elements in the array

function quickSort (array) {

    if (!array.length)
        return array

    var pivot = array.splice(0, 1) //this removes the pivot from the original array
    var less = []
    var greater = []

    array.forEach( el => el < pivot ? less.push(el) : greater.push(el));

    return quickSort(less).concat(pivot).concat(quickSort(greater));
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



