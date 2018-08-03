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
            
        return this.contains(value, node.next) // What is this? The object itself? 
    }

    delete2(index){
        if(index === 0) {
            const head = this.head;
            if(head){
                this.head = head.next
            } else {
                this.head = null;  
            }
        }
    }

    //testIndex(search, __, i)

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

        //const node = this._find(index -1, node, this.testIndex);


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

        
    }
}

export default LinkedList;