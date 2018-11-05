function reverseArray(array) {

    return array.reduceRight((b, a) => b.concat(a), []);
}

const input = [5,4,3,2,1];
const output = reverseArray(input);
console.log(output);