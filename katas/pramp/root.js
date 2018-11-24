function root(x, n) {

    let lowerRange = x - 0.001;
    let upperRange = x + 0.001;

    function recurse(lowerBound, upperBound){
        
        let half = (upperBound - lowerBound)/2;
        let middle = lowerBound + half;
        let guess = Math.pow(middle,n);
    
        if(lowerRange < guess && guess < upperRange) return middle.toFixed(3);

        if(guess < lowerRange) return recurse(middle + 1, upperBound)
    
        if(guess > upperRange) return recurse(lowerBound, middle - 1);
    }

    return recurse(0, x);
   
}

let x = 27;
let n = 3;
let expected = 3.000;
let actual = root(x, n);
console.log(expected == actual);

x = 16;
n = 2;
expected = 4.000;
actual = root(x, n);
console.log(expected == actual);

x = 7;
n = 3;
expected = 1.913;
actual = root(x, n);
console.log(expected == actual);

x = 9;
n = 2;
expected = 3.000;
actual = root(x, n);
console.log(expected == actual);