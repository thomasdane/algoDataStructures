export class Bst {
    constructor(){
        this.root = null;
    }
}

class BstNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export const AddToBst = (bst, value) => {
    const newNode = new BstNode(value);
    var temp = bst;

    if(!temp.root){
        temp.root = newNode;
        return temp;
    }

    if(temp.root.value > value) {

        if(!temp.root.left){
            temp.root.left = newNode;
            return temp;
        }
    
        console.log(temp.root.left);
        
        AddToBst(temp.root.left, value)
    }

    return temp;
}

