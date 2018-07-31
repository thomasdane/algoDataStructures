import Node from './node.js'

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {  //O(1)
        var node = new Node(value);

        if(!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
            
        this.tail = node;
    }

    _find(value, node) { //O(n)

        if(!node)
            return null;

        if(node.value === value)
            return value;
            
        return this._find(value, node.next) // What is this? The object itself? 
    }
}

export default LinkedList;