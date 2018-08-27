//when 0, then 0
//when 1, then 1
//when 2, then 2
//when 3, then 3
//when 4, then 5
//when 5, then 8
//when 6, then 13

let result = [1,2]

const numWays = input => {

    if(input < 3) return input;

    const sum = values => {
        let last = values[values.length - 1];
        let secondLast = values[values.length - 2];
        let sum = last + secondLast;
        result.push(sum);
    }

    if(input < result.length){
        return result[input-1];
    }

    for(let i = result.length + 1; i <= input; i++){
        sum(result);
    }

    return result[result.length-1];
}



// console.log(numWays(0));
// console.log(numWays(1));
// console.log(numWays(2));
console.log(numWays(3));
console.log(numWays(4));
console.log(numWays(5));
console.log(numWays(6));
console.log(numWays(7));
console.log(numWays(4));


//one a ttime
//two at a time
//two, then two 1s
//two 1s then 2
//1, 2, 1

//1,1,1,1,1

//2,1,1,1
//1,2,1,1
//1,1,2,1
//1,1,1,2

//2,2,1
//2,1,2
//1,2,2

//given a number, workout the next number in fib sequence