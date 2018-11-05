//reverse a singly linked list

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function printList(list){

    function recurse(node){
        if(!node) return;

        console.log(node.value);

        recurse(node.next);
    }

    recurse(list.head);
} 

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value){
        const node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    addToStart(value) {
        const node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    reverseList(){
        const newList = new LinkedList();
    
        function recurse(node, list){
            if(!node) return list;
    
            list.addToStart(node.value);
    
            return recurse(node.next, list);
        }
    
        return recurse(this.head, newList);
    }
}

const list = new LinkedList();
list.add(3);
list.add(2);
list.add(1);

const reversed = list.reverseList();
printList(reversed);