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

    delete(value, node){
        //if node is null
        //return false

        if(!node) return false;

        // //if it is the tail
        // //t
        // if(node.next === null)
        // {

        // }
        // //if node is one item
        // //and equals value
        // //set head and tail to null
        // if(!node.tail && node.value === value){
        //     node.head = null;
        //     node.tail = null;
        // }

        // //if node.value is not the value
        // //run the function again
        // //with node.next

        if(node.value != value){
            this.delete(value, node.next);
        }
    }
}

export default LinkedList;