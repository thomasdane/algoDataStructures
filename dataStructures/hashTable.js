class HashTableSet {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.table = new Array(maxSize);
    }

    add(input) {
        const hashCode = generateHashCode(input, this.maxSize);        
        this.table[hashCode] = input;
    }

    check(input) {
        const hashCode = generateHashCode(input, this.maxSize); 
        if(this.table[hashCode]) return true;
        return false;       
    }
}

const generateHashCode = (input, maxValue) => {
    let hash = 0;
    const inputLength = input.length;

    if(inputLength === 0) return hash;

    for(var i = 0; i < inputLength; i++){
        const charCode = input.charCodeAt(i);
        hash = ((hash<<5)-hash)+charCode;
        hash = hash & hash;
    }

    return Math.abs(hash % maxValue);
}

export {generateHashCode, HashTableSet};