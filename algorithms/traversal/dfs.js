const preOrderTraverse = (node, array) => {
    if(!node) return array;
    array.push(node.value);
    preOrderTraverse(node.left, array);
    preOrderTraverse(node.right, array);
    return array;
} 

const inOrderTraverse = (node, array) => {
    if(!node) return array;
    inOrderTraverse(node.left, array);
    array.push(node.value);
    inOrderTraverse(node.right, array);
    return array;
} 

const postOrderTraverse = (node, array) => {
    if(!node) return array;
    postOrderTraverse(node.left, array);
    postOrderTraverse(node.right, array);
    array.push(node.value);
    return array;
} 

export {preOrderTraverse, inOrderTraverse, postOrderTraverse};