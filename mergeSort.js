// Test cases

// When [] should be []
// When [4] should be [4]
// When [3,11,5] should be [3, 5, 11]
// When [-3, -5, -11] should be [-11, -5, -3]

// Pseudo code

//two functions
// 1. split will take the array
// split it in two
// and if the array is longer than 1 element
// call the split function again with each split array

// 2. stitch or merge
// will take arrays
// will zip them up
// this relies on us knowing that the arrays we get are either 1 element long, or sorted
// we compare the first two elements
// 1 and 2
// 1 is smaller,
// it goes in new array
// we then find the next element
// we compare it to the element below
//[3,5,7]
//[1,1,8]

const empty = [];
const oneItem = [3];
const twoItems = [4,3];
const fourItems = [3, 6, 4, 5];
const fiveItems = [3, 7, 5, 6, 4];
const negative = [-3, -5, -4];

const mergeSort = (array) => {
  let divide = split(array);
  const predicate = (a,b) => a <= b;
  return divide.reduce((a, b) => merge(predicate, a, b), [b])
}

const merge = (predicate, left, right) => {

  if(left.length === 0 || right.length === 0)
    return left.concat(right)

  let results = [];  

  left[0] < right[0] ? results.push(left.shift()) : results.push(right.shift());
  
  return results.concat(merge(predicate, left, right));  
};

const split = (array) => {
    if(array.length <= 1 )
        return array;

    const half = array.length / 2;
    const middle = Math.floor(half);
    const left = array.slice(0, middle); // slice is non destructive
    const right = array.slice(middle, array.length);

    let sortedLeft = split(left);
    let sortedRight = split(right);

    return sortedLeft.concat(sortedRight);
}

 


console.log(mergeSort(empty));
console.log(mergeSort(oneItem));
console.log(mergeSort(twoItems));
console.log(mergeSort(fourItems));
console.log(mergeSort(fiveItems));
console.log(mergeSort(negative));



