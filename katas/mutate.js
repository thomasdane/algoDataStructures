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
    constructor(input){
        this.queue = new Queue();
        this.input = input;
    }
    
    hasNext() {
        return this.input.length > 0;
    }
    
    next(){

        let firstElement = this.input.shift();

        if(Array.isArray(firstElement)){
            firstElement.map(x => this.queue.enqueue(x));
            const firstNode = this.queue.dequeue();
            return firstNode.value;
        }

        return firstElement;
    }
}

const iterate = input => {

    const iterator = new Iterator(input);
    const result = [];

    while(iterator.hasNext()){
        const next = iterator.next();
        result.push(next);

        while(iterator.queue.head) {
            let firstNode = iterator.queue.dequeue();
            result.push(firstNode.value);
        }
    }

    return result.join();
}

//Arrange
const emptyInput = [];
const singleElementInput = [1];
const twoElementsInput = [1,2];
const nestedInput = [1,[2,3]];
const doublyNestedInput = [1,[2,[3,4],5],6]
const sampleInput = [9,[1,3],4,5];

//Act
const empty = iterate(emptyInput);
const singleElement = iterate(singleElementInput);
const twoElements = iterate(twoElementsInput);
const nested = iterate(nestedInput);
const doublyNested = iterate(doublyNestedInput);
const sample = iterate(sampleInput);

//Assert
console.log(empty.length === 0);
console.log(singleElement === "1");
console.log(twoElements === "1,2");
console.log(nested === "1,2,3");
console.log(sample === "9,1,3,4,5");
console.log(doublyNested === "1,2,3,4,5,6");
