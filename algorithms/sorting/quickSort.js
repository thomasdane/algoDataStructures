function quickSort (array) {

    if (array.length <= 1)
        return array
    
    let pivot = array.splice(0, 1);
    let left = []
    let right = []

    array.map(x => x < pivot ? left.push(x) : right.push(x));

    return quickSort(left).concat(pivot).concat(quickSort(right));
}

export default quickSort;



