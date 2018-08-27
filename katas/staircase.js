//when 0, then 0
//when 1, then 1
//when 2, then 2
//when 3, then 3
//when 4, then 5
//when 5, then 8
//when 6, then 13


const numWays = input => {

    if(input < 3) return input;

    let values = [1,2];
    let result = values.concat();

    const sum = values => {
        let sum = values[0] + values[1];
        result.push(sum);
        values.shift();
    }

    for(let i = 3; i <= input; i++){
        sum(result);
    }

    return result[result.length-1];
}


console.log(numWays(0));
console.log(numWays(1));
console.log(numWays(2));
console.log(numWays(3));
console.log(numWays(4));
console.log(numWays(5));
console.log(numWays(6));
console.log(numWays(7));


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