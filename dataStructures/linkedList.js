import Node from './node.js'

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) {  //O(1)
        var node = new Node(value);

        if(!this.head) {
            this.head = node;
            this.tail = node; //can't have a next, because only 1

        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    shift(){

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

    //unshift? push to start

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

    deleteValue(value){ //assumes unique ??

        if(!this.head) return false;

        if(this.head.value === value) {

            if(this.head === this.tail){ //if the list is only 1 item long
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }
            
            return true;
        }


        const recurse = (node, value) => {
            if(!node) return false;

            //console.log("plain node")
            //console.log(node);

            const nextNode = node.next;

            //console.log("next node")
            //console.log(nextNode);


            if(!nextNode) return false; //reached tail with no match

            if(nextNode.value === value){
                node.next = nextNode.next;
                if(nextNode === this.tail) {
                    this.tail = node;
                }
                return true;
            }

            return recurse(nextNode, value)
        }

        return recurse(this.head, value);
    }
}

export default LinkedList;