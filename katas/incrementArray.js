//given an array like [2,3,1,4]
//return a new array with the last element incremented by 1
//for example, [2,3,1,5]
//in cases where the array ends with 9, such as [9,9,9]
//then it should return [1,0,0,0]
//the array cannot be empty or negative

//when [1] returns [2]
//when [1,2] returns [1,3]
//when [2,3,1,4] returns [2,3,1,5]
//when [9] returns [1,0]
//when [1,9] returns [2,0]
//when [9,9] returns [1,0,0] ----- current would return 9,1,0
//when [9,9,9] returns [1,0,0,0]
//when [1,3,9] returns [1,4,0]

const incrementArray = (array) => {
    const tempArray = array;

    const recurse = (tempArray, element) => {

        if(element < 9) {
            return tempArray.concat(element + 1);
        }

        const previousNumber = tempArray.pop()

        if(!previousNumber){ //if start of array
            return [1].concat(0);
        }

        const result = recurse(tempArray, previousNumber).concat(0);
        return tempArray.concat(result);
    }

    const last = tempArray.pop(); 
    return recurse(tempArray, last);
}

export default incrementArray;