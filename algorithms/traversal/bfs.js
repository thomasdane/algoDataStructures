const bfs = tree => {

    const queue = new Queue();
    queue.enqueue(tree.root);

    const recurse = (queue, array) => {

        if(!queue.head) return array;

        const queueNode = queue.dequeue();
        const treeNode = queueNode.value;

        array.push(treeNode.value);

        if (treeNode.left) queue.enqueue(treeNode.left);
        if (treeNode.right) queue.enqueue(treeNode.right);

        return recurse(queue, array);
    }

    return recurse(queue, []);
    
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value){
        var node = new QueueNode(value);

        if(!this.head) {
            this.head = node;
            this.tail = node;

        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue(){
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
}

class QueueNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Bst {
    constructor(){
        this.root = null;
    }

    add(value){

        var newNode = new TreeNode(value);

        if(!this.root){
            this.root = newNode;
            return;
        }

        const recurse = (node, value) => {
    
            if(node.value > value){
                if(!node.left){
                    node.left = newNode;
                }
                recurse(node.left, value)
            }
    
            if(node.value < value){
                if(!node.right){
                    node.right = newNode;
                }
                recurse(node.right, value)
            }
        }

        return recurse(this.root, value);
    }
}

class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export {bfs, Bst};

