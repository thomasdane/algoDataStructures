const mergeSort = array => {
    
    if(array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle); 
    const right = array.slice(middle, array.length);

    let mergeSortedLeft = mergeSort(left);
    let mergeSortedRight = mergeSort(right);

    const compare = (a,b) => a <= b;
    return zipWith(compare, mergeSortedLeft, mergeSortedRight)
}

const zipWith = (compare, left, right) => {

  if(!left.length || !right.length)
    return left.concat(right)

  let results = [];  
  let peekLeft = left[0];
  let peekRight = right[0];

  compare(peekLeft, peekRight) 
    ? results.push(left.shift()) 
    : results.push(right.shift());
  
  return results.concat(zipWith(compare, left, right));  
}; 

export default mergeSort;