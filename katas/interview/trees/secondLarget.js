const findSecondLargestDFS = tree => {

    const values = [];

    const dfs = (node, values) => {

        if(!node) return values;

        dfs(node.left, values);
        values.push(node.value);
        dfs(node.right, values);

        return values;
    }

    dfs(tree,values);

    return values[values.length - 2] || "Tree invalid";

};


//BIG O
//Time is O(n) - we visit every node
//Space is O(n) worst case and O(log n) best case. 
//Worst case is a linked list. Best case is a balanced binary tree.


function findLargest(rootNode) {
  if (!rootNode) {
    return 'Tree must have at least 1 node';
  }
  if (rootNode.right) {
    return findLargest(rootNode.right);
  }
  return rootNode.value;
}

function findSecondLargest(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    return 'Tree must have at least 2 nodes';
  }

  // Case: we're currently at largest, and largest has a left subtree,
  // so 2nd largest is largest in said subtree
  if (rootNode.left && !rootNode.right) {
    return findLargest(rootNode.left);
  }

  // Case: we're at parent of largest, and largest has no left subtree,
  // so 2nd largest must be current node
  if (
    rootNode.right
    && !rootNode.right.left
    && !rootNode.right.right
  ) {
    return rootNode.value;
  }

  // Otherwise: step right
  return findSecondLargest(rootNode.right);
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
  let treeRoot = new BinaryTreeNode(50);
  let leftNode = treeRoot.insertLeft(30);
  leftNode.insertLeft(10);
  leftNode.insertRight(40);
  let rightNode = treeRoot.insertRight(70);
  rightNode.insertLeft(60);
  rightNode.insertRight(80);
  assertEquals(findSecondLargest(treeRoot), 70, desc);
  
  desc = 'largest has a left child';
  treeRoot = new BinaryTreeNode(50);
  leftNode = treeRoot.insertLeft(30);
  leftNode.insertLeft(10);
  leftNode.insertRight(40);
  rightNode = treeRoot.insertRight(70);
  rightNode.insertLeft(60);
  assertEquals(findSecondLargest(treeRoot), 60, desc);
  
  desc = 'largest has a left subtree';
  treeRoot = new BinaryTreeNode(50);
  leftNode = treeRoot.insertLeft(30);
  leftNode.insertLeft(10);
  leftNode.insertRight(40);
  rightNode = treeRoot.insertRight(70);
  leftNode = rightNode.insertLeft(60);
  leftNode.insertRight(65);
  leftNode = leftNode.insertLeft(55);
  leftNode.insertRight(58);
  assertEquals(findSecondLargest(treeRoot), 65, desc);

  /*

      50
   30      70
10   40   60
        55  65
          58  
  */
  
  desc = 'second largest is root node';
  treeRoot = new BinaryTreeNode(50);
  leftNode = treeRoot.insertLeft(30);
  leftNode.insertLeft(10);
  leftNode.insertRight(40);
  rightNode = treeRoot.insertRight(70);
  assertEquals(findSecondLargest(treeRoot), 50, desc);
  
  desc = 'descending linked list';
  treeRoot = new BinaryTreeNode(50);
  leftNode = treeRoot.insertLeft(40);
  leftNode = leftNode.insertLeft(30);
  leftNode = leftNode.insertLeft(20);
  leftNode = leftNode.insertLeft(10);
  assertEquals(findSecondLargest(treeRoot), 40, desc);
  
  desc = 'ascending linked list';
  treeRoot = new BinaryTreeNode(50);
  rightNode = treeRoot.insertRight(60);
  rightNode = rightNode.insertRight(70);
  rightNode = rightNode.insertRight(80);
  assertEquals(findSecondLargest(treeRoot), 70, desc);
  
  desc = 'one node tree';
  treeRoot = new BinaryTreeNode(50);
  console.log(findSecondLargest(treeRoot));
  
  desc = 'when tree is empty';
  treeRoot = null;
  console.log(findSecondLargest(treeRoot));
  
  function assertEquals(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
  }
  
  function assertThrowsError(func, desc) {
    try {
      func();
      console.log(`${desc} ... FAIL`);
    } catch (e) {
      console.log(`${desc} ... PASS`);
    }
  }