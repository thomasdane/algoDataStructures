
class Queue { //implemented using a linked list
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value){
        var node = new Node(value);

        if(!this.head) {
            this.head = node;
            this.tail = node;

        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue(){
        if(!this.head) return null;

        const result = this.head;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        return result;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Iterator {
    constructor(){
        this.queue = new Queue();
    }
    
    hasNext(input) {
        return input.length > 0;
    }
    
    next(input){

        let firstElement = input.shift();

        if(Array.isArray(firstElement)){
            firstElement.map(x => this.queue.enqueue(x));
            const first = this.queue.dequeue();
            return first.value;
        };

        return firstElement;
    }

    iterate(input){

        const recurse = (input, result) => {
            if(!this.hasNext(input)) return result.join();
            let next = this.next(temp);
            result.push(next);
            while(this.queue.head) {
                let firstNode = this.queue.dequeue().value;
                result.push(firstNode);
            }
            return recurse(temp, result);
        }

        let result = [];
        const temp = input;

        return recurse(temp, result);
    }
}

//Arrange
const iterator = new Iterator();
const emptyInput = [];
const singleElementInput = [1];
const twoElementsInput = [1,2];
const nestedInput = [1,[2,3]];
const doublyNestedInput = [1,[2,[3,4],5],6]
const sampleInput = [9,[1,3],4,5];

//Act
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
console.log(sample)
