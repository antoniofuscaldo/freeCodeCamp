/**

Use Breadth First Search in a Binary Search Tree

Here we will introduce another tree traversal method: breadth-first search. In contrast to the depth-first search methods from the last challenge, breadth-first search explores all the nodes in a given level within a tree before continuing on to the next level. Typically, queues are utilized as helper data structures in the design of breadth-first search algorithms.

In this method, we start by adding the root node to a queue. Then we begin a loop where we dequeue the first item in the queue, add it to a new array, and then inspect both its child subtrees. If its children are not null, they are each enqueued. This process continues until the queue is empty.

Let's create a breadth-first search method in our tree called levelOrder. This method should return an array containing the values of all the tree nodes, explored in a breadth-first manner. Be sure to return the values in the array, not the nodes themselves. A level should be traversed from left to right. Next, let's write a similar method called reverseLevelOrder which performs the same search but in the reverse direction (right to left) at each level.

*/

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.levelOrder = function () {
    if (!this.root) return null;
    let result = [];
    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  };
  this.reverseLevelOrder = function () {
    if (!this.root) return null;
    let result = [];
    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    return result;
  };
}
