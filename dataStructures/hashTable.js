const hashCode = (input, maxValue) => {
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

export default hashCode;