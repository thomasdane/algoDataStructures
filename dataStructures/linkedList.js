import Node from './node.js'

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);

        if(this.head) 
            this.tail.next = node;

        if(!this.head) 
            this.head = node;
            
        this.tail = node;

        this.length++;
    }

    _find(value, node) {
        if(node === null)
            return null;

        if(node.value === value)
            return value;
            
        return this._find(value, node.next)
    }

    _compare(a,b) {
        return a === b.value;
    }
}

export default LinkedList;