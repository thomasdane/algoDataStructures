////////////////////////////////////////////////
////////////// LOOPS ///////////////////////////

let fibs = [1,1]

const numWays = input => {

    console.time("loop")
    if(input < 2) return 1;

    if(input < fibs.length){
        console.timeEnd("loop");
        return fibs[input];
    }

    for(let i = fibs.length; i <= input; i++){
        let last = fibs[fibs.length - 1];
        let secondLast = fibs[fibs.length - 2];
        let sum = last + secondLast;
        fibs.push(sum);
    }

    console.timeEnd("loop");
    return fibs[fibs.length-1];
}

console.log(numWays(8));
console.log(numWays(9));
console.log(numWays(8));

//////////////////////////////////////////////////////////
////////////////////// RECURSIVE /////////////////////////

const numWaysRecurse = input => {
    
    if(input < 2) return 1;

    return (numWaysRecurse(input - 1) + numWaysRecurse(input - 2));
}

console.log("/////////////////RECURSE ////////////////////");

let a = 11;
console.time(a)
console.log(numWaysRecurse(a));
console.timeEnd(a);

let b = 21;
console.time(b)
console.log(numWaysRecurse(b));
console.timeEnd(b);

let c = 11;
console.time(c)
console.log(numWaysRecurse(c));
console.timeEnd(c);


const numWaysRecurseMemo = input => {
    
    if(input in fibsObject) {
        return fibsObject[input];
    }
    
    if(input < 2) return 1;

    fibsObject[input] = (numWaysRecurse(input - 1) + numWaysRecurse(input - 2));

    return fibsObject[input];
}

let fibsObject = {};


console.log("//////////////////MEMO///////////////////");

let x = 11;
console.time(x)
console.log(numWaysRecurseMemo(x));
console.timeEnd(x);

let y = 21;
console.time(y)
console.log(numWaysRecurseMemo(y));
console.timeEnd(y);

let z = 11;
console.time(z)
console.log(numWaysRecurseMemo(z));
console.timeEnd(z);