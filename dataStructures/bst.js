import Node from './node.js'

class Bst {
    constructor() {
        this.root = null;
        this.left = null;
        this.right = null;
    }

    add(value){
        if(!value) return null;
        var node = new Node(value);

        if(!this.root)
            this.root = node;

        if(value <= this.root.value)
            this.left = node;

        if(value > this.root.value)
            this.right = node;
    }

}

export default Bst;