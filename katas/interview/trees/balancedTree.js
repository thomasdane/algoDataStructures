//A tree is "superbalanced" if the difference between the depths of any two leaf nodes
//is no greater than one.

function isBalanced(treeRoot) {
  
    let min = 100;
    let max = 0;

    const balanced = (max, min) => max - min <= 1;

    const recurse = (node, depth) => {

        console.log('===================')
        console.log("node", node.value)
        console.log("depth", depth)

        if(!balanced(max, min)) {
            console.log('breaking early');
            return false;
        }

        const isLeaf = !node.left && !node.right;
        
        if(isLeaf) {
            console.log('is leaf')

            if(depth < min) min = depth;
            if(depth > max) max = depth;

            console.log('min depth', min);
            console.log('max depth', max)

            if(!balanced(max, min)) {
                console.log('NOT balanced')
                return false;
            } else { 
                console.log('balanced')
                return true
            }

        } else {

            depth +=1;

            if(node.left) {
                console.log('processing left')
                recurse(node.left, depth);
            }
            if(node.right) {
                console.log('processing right')
                recurse(node.right, depth)
            }

            console.log('returning');
            return balanced(max, min);
        }  
    };

    return recurse(treeRoot, 1);
}


class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left  = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
}
  
// Tests

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(8);
leftNode.insertLeft(1);
leftNode.insertRight(2);
let rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

/*
    5
   / \
  8   6
 / \ / \
1  2 3  4

*/

desc = 'both leaves at the same depth';
treeRoot = new BinaryTreeNode(3);
leftNode = treeRoot.insertLeft(4);
leftNode.insertLeft(1);
rightNode = treeRoot.insertRight(6);
rightNode.insertRight(9);
assertEquals(isBalanced(treeRoot), true, desc);

/*
    3
   / \
  4   6
 /     \
1       9

*/

desc = 'leaf heights differ by one';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7);
assertEquals(isBalanced(treeRoot), true, desc);

/*
    6
   / \
  1   0
       \
        7

*/

desc = 'leaf heights differ by two';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7).insertRight(8);
assertEquals(isBalanced(treeRoot), false, desc);


/*
    6
   / \
  1   0
       \
        7
         \
          8

*/

desc = 'should break early';
treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
let seven = rightNode.insertRight(7);
seven.insertLeft(6);
seven.insertRight(8).insertRight(11);
assertEquals(isBalanced(treeRoot), false, desc);


/*
    6
   / \
  1   0
       \
        7
       / \
      6   8

*/

desc = 'three leaves total';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'both subtrees superbalanced';
treeRoot = new BinaryTreeNode(1);
leftNode = treeRoot.insertLeft(5);
rightNode = treeRoot.insertRight(9);
rightNode.insertLeft(8).insertLeft(7);
rightNode.insertRight(5);
assertEquals(isBalanced(treeRoot), false, desc);

desc = 'only one node';
treeRoot = new BinaryTreeNode(1);
assertEquals(isBalanced(treeRoot), true, desc);

desc = 'linked list tree';
treeRoot = new BinaryTreeNode(1);
treeRoot.insertRight(2).insertRight(3).insertRight(4);
assertEquals(isBalanced(treeRoot), true, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
}