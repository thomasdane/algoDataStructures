// Test inputs

// let empty = []; // then []
// let oneItem = [3]; // then [3]
// let twoItems = [4,3]; //then [3,4]
// let threeItems = [3, 5, 4]; // then [3,4,5]
// let fiveItems = [3, 5, 4, 1, 2]; // then [1,2,3,4,5]
// let negative = [-3, -5, -4]; // then [-5,-4,-3]

/////////////////// SORTING //////////////////////////

// MERGE SORT

// import mergeSort from './mergeSort.js';
// console.log(mergeSort.mergeSort(empty));
// console.log(mergeSort.mergeSort(oneItem));
// console.log(mergeSort.mergeSort(twoItems));
// console.log(mergeSort.mergeSort(threeItems));
// console.log(mergeSort.mergeSort(fiveItems));
// console.log(mergeSort.mergeSort(negative));

//////////////// DATA STRUCTURES ////////////////////

// NODE

// import Node from './dataStructures/node.js';
// let node = new Node(2);
// console.log(node);

// LINKED LIST

import LinkedList from './dataStructures/linkedList.js';

let list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list)

let value = list._find(2);
console.log(value);



