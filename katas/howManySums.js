/* Given an number and an array
Find how many combinations of numbers exist that add up to the number
For example, given 16 and [2,4,6,10]
The function should return 2. Because there is [6,10] and also [2,4,10]
*/

//create an array n items long
//when see a number, add it to array O(n)
//when see another number, check if n - number exists in the array
//
//10, [2,4,6]
const findSums = (target, numbers) => {

    if(target === 0) return true;

    if(numbers.length === 0) return false;

    [first, ...rest] = numbers;

    return findSums(target - first, rest)
    || findSums(target, rest);
}

//Arrange
const emptyInput = [];
const oneElementInput = [1];
const twoElementsInput = [2,2];
const threeElementsInput = [2,4,6];
const fourElementsInput = [2,4,6,10];

//Act
// const empty = findSums(5, emptyInput);
// const oneExists = findSums(1, oneElementInput);
// const oneNotExists = findSums(2, oneElementInput);
// const twoExists = findSums(2, twoElementsInput); //
// const twoNotExists = findSums(3, twoElementsInput);
// const twoExistsSum = findSums(4, twoElementsInput);
// const threeNotExists = findSums(11, threeElementsInput);
const threeExistsOnce = findSums(10, threeElementsInput);
// const threeExistsTwice = findSums(6, threeElementsInput);
// const threeRequiresThreeInts = findSums(16, fourElementsInput);

//Assert
// console.log(empty === false)
// console.log(oneExists === true);
// console.log(oneNotExists === false);
// console.log(twoExists === true);
// console.log(twoNotExists === false);
// console.log(twoExistsSum === true);
// console.log(threeNotExists === false);
console.log(threeExistsOnce);
// console.log(threeExistsTwice === true);
// console.log(threeRequiresThreeInts);