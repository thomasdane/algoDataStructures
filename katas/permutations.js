const findPermutations = string => {

    let result = new Set();

    const recurse = (soFar, rest) =>  {

        const n = rest.length;
        
        if (n === 0) {
            result.add(soFar); 
        }

        for (let i = 0; i < n; i++){
            const next = soFar + rest[i];
            const remaining = rest.slice(0, i) + rest.slice(i+1);
            recurse(next, remaining);
        }
    }

    recurse("", string);
    return result;
}

console.log(findPermutations("abc"));