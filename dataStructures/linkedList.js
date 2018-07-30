import Node from './node.js'

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);

        this.length++;

        if(!this.head) {
            this.head = node;
            
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }

    _find(value, compare = this._compare) {
        let current = this.head;
        let i = 0;

        while(current){
            
            if(compare(value, current, i)) {
                return current;
            }

            current = current.next;
            i++;

        }

        return null;
    }

    _compare(a,b) {
        return a === b.value;
    }
}

export default LinkedList;