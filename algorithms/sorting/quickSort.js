function quickSort (array) {

    if (array.length <= 1) return array
    
    const pivot = array.splice(0, 1);
    const left = []
    const right = []

    array.forEach(x => x < pivot ? left.push(x) : right.push(x));

    return quickSort(left).concat(pivot).concat(quickSort(right));
}

export default quickSort;



