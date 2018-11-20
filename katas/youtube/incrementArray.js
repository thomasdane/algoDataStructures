//given an array like [2,3,1,4]
//return a new array with the last element incremented by 1
//for example, [2,3,1,5]
//in cases where the array ends with 9, such as [9,9,9]
//then it should return [1,0,0,0]
//the array cannot be empty or negative

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