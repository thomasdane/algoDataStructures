//given a string, find the first repeated character
//'abca' -> 'a'
//'bcaba' -> 'b'
//'abc' -> null

const firstRepeatedChar = (string) => {
    if(string.length < 2) return null;

    const chars = string.split('');
    let charCount = {};

    for(let i = 0; i < chars.length; i++){
        const target = chars[i];
        if(charCount[target]) return target;
        charCount[target] = 1;
    }

    return null;
}


const firstRepeatedCharRecurse = (string) => {
    if(string.length < 2) return null;

    const chars = string.split('');
    let charCount = {};

    const recurse = (index) => {
        if(index = chars.length) return null;

        const target = chars[index];

        if(charCount[target]) return target;
        
        charCount[target] = 1;
        recurse(index + 1);
    }

    return recurse(0);
}

export {firstRepeatedChar, firstRepeatedCharRecurse}
