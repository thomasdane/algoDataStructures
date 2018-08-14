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

    contains(value) { //O(n)
        
        const recurse = (node, value) => {
            if(!node)
                return false;

            if(node.value === value)
                return true;
                
            return recurse(node.next, value)
        }

        return recurse(this.head, value);
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