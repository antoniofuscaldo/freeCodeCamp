/**

Delete a Leaf Node in a Binary Search Tree

This is the first of three challenges where we will implement a more difficult operation in binary search trees: deletion. Deletion is difficult because removing nodes breaks links in the tree. These links must be carefully reestablished to ensure the binary tree structure is maintained. For some deletions, this means the tree must be rearranged. In general, you will encounter one of three cases when trying to delete a node: Leaf Node: The target to delete has zero children. One Child: The target to delete only has one child. Two Children: The target to delete has two child nodes. Removing a leaf node is easy, we simply remove it. Deleting a node with one child is also relatively easy, we simply remove it and link its parent to child of the node we deleted. Removing a node with two children is more difficult, however, because this creates two child nodes that need to be reconnected to the parent tree. We'll see how to deal with this case in the third challenge. Additionally, you need to be mindful of some edge cases when handling deletion. What if the tree is empty? What if the node to delete is the root node? What if there are only two elements in the tree? For now, let's handle the first case where we delete a leaf node.

Create a method on our binary tree called remove. We'll build the logic for our deletion operation in here. First, you'll want to create a function within remove that finds the node we are trying to delete in the current tree. If the node is not present in the tree, remove should return null. Now, if the target node is a leaf node with no children, then the parent reference to it should be set to null. This effectively deletes the node from the tree. To do this, you will have to keep track of the parent of the node we are trying to delete as well. It will also be useful to create a way to track the number of children the target node has, as this will determine which case our deletion falls under. We will handle the second and third cases in the next challenges. Good luck!

*/

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.remove = function (value) {
    if (!this.root) return null;
    let parent = null;
    let current = this.root;
    while (current) {
      if (value === current.value) {
        if (!current.left && !current.right) {
          if (!parent) {
            this.root = null;
          } else if (parent.left === current) {
            parent.left = null;
          } else {
            parent.right = null;
          }
          return;
        } else {
          return null;
        }
      } else if (value < current.value) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }
    return null;
  };
}
