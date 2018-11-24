function findPairsWithGivenDifference(arr, k) {
  
  if(k === 0) return [];
  
  const seen = new Set();
  const result = [];
  
  arr.forEach(number =>  {
    const target = number - k;
    seen.add(target);
  });
  
  arr.forEach(number => {
    if(seen.has(number)){
      const original = number + k;
      const pair = [original, number]
      result.push(pair);
    }            
  })     

  return result
}

const example = [0, -1, -2, 2, 1];
const expected = [ [ 1, 0 ], [ 0, -1 ], [ -1, -2 ], [ 2, 1 ] ]
const result = findPairsWithGivenDifference(example, 1);
console.log(result.toString() === expected.toString());

const secondExample = [1, 7, 5, 3, 32, 17, 12];
const secondResult = findPairsWithGivenDifference(secondExample, 17);
console.log(secondResult.length === 0);