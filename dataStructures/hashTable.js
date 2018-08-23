const hashCode = (input) => {
    let hash = 0;
    const inputLength = input.length;

    if(inputLength === 0) return hash;

    for(var i = 0; i < inputLength; i++){
        const charCode = input.charCodeAt(i);
        hash = (hash * 31) + charCode;
        hash = hash & hash;
    }

    return hash;
}

export default hashCode;