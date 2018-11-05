//reverse a singly linked list

function printList(list){

    function recurse(node){
        if(!node) return;

        process.stdout.write(node.value + " --> ");

        recurse(node.next);
    }

    recurse(list.head);
    console.log();

} 

function toList(array) {
    const list = new LinkedList();

    for(let i = 0; i < array.length; i++){
        const element = array[i];
        list.add(element);
    }

    return list;
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
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

const array = [1,2,3,4,5];
const list = toList(array);

const reversed = list.reverseList();
printList(reversed);
printList(list)
