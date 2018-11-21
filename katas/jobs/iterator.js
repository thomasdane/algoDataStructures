class Iterator {
    constructor(){
        this.queue = [];
    }
    
    hasNext(input) {
        return input.length > 0;
    }
    
    next(input){
        let firstElement = input.shift();

        if(Array.isArray(firstElement)){
            firstElement.map(x => this.queue.push(x));
            const firstNode = this.queue.shift()
            return firstNode;
        }

        return firstElement;
    }

    iterate(input) {

        const iterator = new Iterator(input);
        const result = [];
    
        while(iterator.hasNext(input)){
            const next = iterator.next(input);
            result.push(next);
    
            while(iterator.queue.length > 0) {
                let firstNode = iterator.queue.shift();
                result.push(firstNode);
            }
        }
    
        return result.join("").replace(/,/g, "");
    }

    iterateRecurse(input) {

        function recurse(input, output) {

            if(input.length === 0) return output;
    
            input.forEach(element => {
                if(Array.isArray(element)) return recurse(element, output);
                output.push(element);
            });

            return output;
        }

        const result = recurse(input, []);
        return result.join("");
    }
}

//Arrange
const emptyInput = [];
const singleElementInput = [1];
const twoElementsInput = [1,2];
const nestedInput = [1,[2,3]];
const sampleInput = [9,[1,3],4,5];
const doublyNestedInput = [1,[2,[3,4],5],6]
const triplyNestedInput = [1,[2,[3,[4, 5],6],7],8]
const emptyNestedInput = [1,[2,[3,[],6],7],8]


//Act
let iterator = new Iterator();
let empty = iterator.iterate(emptyInput);
let singleElement = iterator.iterate(singleElementInput);
let twoElements = iterator.iterate(twoElementsInput);
let nested = iterator.iterate(nestedInput);
let sample = iterator.iterate(sampleInput);
let doublyNested = iterator.iterate(doublyNestedInput);
let triplyNested = iterator.iterate(triplyNestedInput);
let emptyNested = iterator.iterate(emptyNestedInput);

//Assert
console.log(empty.length === 0);
console.log(singleElement === "1");
console.log(twoElements === "12");
console.log(nested === "123");
console.log(sample === "91345");
console.log(doublyNested === "123456");
console.log(triplyNested === "12345678");
console.log(emptyNested === "123678");

// iterator = new Iterator();
// empty = iterator.iterateRecurse(emptyInput);
// singleElement = iterator.iterateRecurse(singleElementInput);
// twoElements = iterator.iterateRecurse(twoElementsInput);
// nested = iterator.iterateRecurse(nestedInput);
// sample = iterator.iterateRecurse(sampleInput);
// doublyNested = iterator.iterateRecurse(doublyNestedInput);
// triplyNested = iterator.iterateRecurse(triplyNestedInput);
// emptyNested = iterator.iterateRecurse(emptyNestedInput);

// //Assert
// console.log(empty.length === 0);
// console.log(singleElement === "1");
// console.log(twoElements === "12");
// console.log(nested === "123");
// console.log(sample)// === "91345");
// console.log(doublyNested)// === "123456");
// console.log(triplyNested === "12345678");
// console.log(emptyNested === "123678");
