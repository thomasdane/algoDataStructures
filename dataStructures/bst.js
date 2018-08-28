export class Bst {
    constructor(){
        this.root = null;
    }

    Add(value) {
        
        const newNode = new BstNode(value);

        if(!this.root) {
            this.root = newNode;
            return;
        }

        const recurse = (node, value) => {

            if(node.value > value) {

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

        return recurse(this.root, value)
    }
}

class BstNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


