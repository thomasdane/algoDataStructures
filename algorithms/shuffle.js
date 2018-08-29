const shuffle = input => {
    let counter = input.length;

    while(counter > 0) {
        const randomIndex = Math.floor(Math.random() * counter);
        counter--;
        input = swap(input, counter, randomIndex);
    }
    return input;
};

const shuffleRecurse = input => {
    let counter = input.length;

    const recurse = (array, counter) => {
        if(counter === 0) return array;

        const randomIndex = Math.floor(Math.random() * counter);
        counter--;

        array = swap(array, counter, randomIndex);
        return recurse(array, counter);
    };

    return recurse(input, counter);
};

const swap = (array, first, second) => {
        const temp = array[first];
        array[first] = array[second];
        array[second] = temp;
        return array;
}


const input = [1,2,3,4,5];
console.log(shuffle(input));
console.log(shuffleRecurse(input));