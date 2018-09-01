const findPermutations = string => {

    let result = new Set();

    const recurse = (soFar, rest) =>  {

        const length = rest.length;
        
        if (length === 0) {
            result.add(soFar); 
        }   

        for (let i = 0; i < length; i++){
            const next = soFar + rest[i];
            const remaining = rest.slice(0, i) + rest.slice(i+1);
            recurse(next, remaining);
        }
    }

    recurse("", string);
    return result;
}

console.log(findPermutations("abc"));