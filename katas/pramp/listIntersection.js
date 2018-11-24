/*
Design and implement an iterator for a heterogenous list, where each element may be an int or a list of ints.
The iterator should iterate over the ints in order they appear in the list, including traversing the embedded lists.

Example input: [9, [1, 3], 4, 5]

Expected iteration order: 9,1,3,4,5

The iterator should have the following methods:

// Are there are elements left in the iteration?
public boolean hasNext();

// Return the next element in the iteration, or fail if there are no more elements.
public int next(); 

*/

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class List{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  push(node) {  
        if(!this.head) {
            this.head = node;
            this.tail = node; 

        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
}

/*
Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting
node. Note that the intersection is defined based on reference, not value. That is, if the kth
node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting.
*/

const a = ['a'];
const b = ['b'];
const c = ['c'];
const d = ['d'];
const e = ['e'];
const f = ['a'];

//console.log("reference", a === f);

const listA = new List();
listA.push(a);
listA.push(b);

const listB = new List();
listB.push(b);
listB.push(c);

const listC = new List();
listC.push(d);
listC.push(e);

const listOne = new List();
var one = new Node(1);
var two = new Node(2);
listOne.push(one);
listOne.push(two);

const listTwo = new List();
var three = new Node(3);
listTwo.push(two);
listTwo.push(three);

const listThree = new List();
var twoA = new Node(2);
var four = new Node(4);
listThree.push(twoA);
listThree.push(four);


function isIntersection(listA, listB){
  
  const references = new Set();
  
  function populateSet(node){
    if(!node) return;
    
    references.add(node);
    
    return populateSet(node.next);
  }
  
  populateSet(listB.head);
  
  function recurse(node) {
    if(!node) return false;
    
    if(references.has(node)){
      return true;
    }
    
    return recurse(node.next);
  }
  
  
  return recurse(listA.head)
  
  
}
const success = isIntersection(listA, listB);
console.log(success === true);

const failure = isIntersection(listA, listC);
console.log(failure === false);

const successInt = isIntersection(listOne, listTwo);
console.log(successInt === true);

const failureInt = isIntersection(listOne, listThree);
console.log(failureInt === false);



