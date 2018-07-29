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
const oneItem = [4];
const twoItems = [4,3];
const fourItems = [3, 11, 5, 6];
const fiveItems = [3, 11, 5, 6, 2];
const negative = [-3, -11, -5];

// const split = array => {
//     if(array.length < 2 )
//         return array;

//     //find out half the length of the array
//     const half = array.length / 2;
//     const middle = Math.floor(half);
//     const left = array.slice(0, middle); // slice is non destructive
//     const right = array.slice(middle, array.length);

//     const result = [];
//     return result.push(left) + result.push(right);
// }

const merge = (left, right) => {
  
    const results = [];
    
    while (left.length && right.length) {
      
      if (left[0] <= right[0]) {
        results.push(left.shift());
      }
      else {
        results.push(right.shift());
      }
    }
    
    return results.concat(left, right);
  };

// console.log(merge(empty));
// console.log(merge(oneItem));
console.log(merge(twoItems, fourItems));
//console.log(merge(fourItems));
// console.log(merge(fiveItems));

//console.log(split(empty));
//console.log(split(oneItem));
// console.log(split(twoItems));
// console.log(split(fourItems));
// console.log(split(fiveItems));


