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
    
        return result.join();
    }
}

//Arrange
const emptyInput = [];
const singleElementInput = [1];
const twoElementsInput = [1,2];
const nestedInput = [1,[2,3]];
const doublyNestedInput = [1,[2,[3,4],5],6]
const sampleInput = [9,[1,3],4,5];

//Act
const iterator = new Iterator();
const empty = iterator.iterate(emptyInput);
const singleElement = iterator.iterate(singleElementInput);
const twoElements = iterator.iterate(twoElementsInput);
const nested = iterator.iterate(nestedInput);
const doublyNested = iterator.iterate(doublyNestedInput);
const sample = iterator.iterate(sampleInput);

//Assert
console.log(empty.length === 0);
console.log(singleElement === "1");
console.log(twoElements === "1,2");
console.log(nested === "1,2,3");
console.log(sample === "9,1,3,4,5");
console.log(doublyNested === "1,2,3,4,5,6");
