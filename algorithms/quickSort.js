function quickSort (array) {

    if (array.length <= 1)
        return array
    
    let pivot = array.splice(0, 1);
    let left = []
    let right = []

    array.map(x => x < pivot ? left.push(x) : right.push(x));

    return quickSort(left).concat(pivot).concat(quickSort(right));
}

export default quickSort;

// COMPLEXITY

// Time = n log n

// Space = 

// This is because we are halving the array at each step. 

// STEPS

//the base case is when there are 1 or 0 elements in the array
//choose a pivot
//create two arrays, to hold elements smaller or than pivot
//for each element in the array, insert it in smaller or bigger
//for each of those arrays, call the quicksort function and concat the result with the pivot

//Improvements to above algorithm

// It is destructive. Alters array passed in. 
// An alternative is to take the first or last element as the pivot,
// And loop over everything except that. 



