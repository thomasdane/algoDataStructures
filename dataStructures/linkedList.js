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

    contains(value, node) { //O(n)

        if(!node)
            return false;

        if(node.value === value)
            return true;
            
        return this.contains(value, node.next)
    }

    delete(value, node){

        if(!node) return false;

        if(node.value != value) {
            return false;
        }

        if(this.head = node) {
            this.head = null;
            this.tail = null;
            return true;
        }
    }
}

export default LinkedList;