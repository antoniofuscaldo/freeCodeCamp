/**

Delete a Node with One Child in a Binary Search Tree

Now that we can delete leaf nodes let's move on to the second case: deleting a node with one child. For this case, say we have a tree with the following nodes 1 — 2 — 3 where 1 is the root. To delete 2, we simply need to make the right reference in 1 point to 3. More generally to delete a node with only one child, we make that node's parent reference the next node in the tree.

We've provided some code in our remove method that accomplishes the tasks from the last challenge. We find the target to delete and its parent and define the number of children the target node has. Let's add the next case here for target nodes with only one child. Here, we'll have to determine if the single child is a left or right branch in the tree and then set the correct reference in the parent to point to this node. In addition, let's account for the case where the target is the root node (this means the parent node will be null). Feel free to replace all the starter code with your own as long as it passes the tests.

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
    if (this.root === null) {
      return null;
    }
    var target = null;
    var parent = null;

    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }).bind(this)();

    if (target === null) {
      return null;
    }

    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);

    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }

    if (children === 1) {
      var child = target.left !== null ? target.left : target.right;
      if (target == this.root) {
        this.root = child;
      } else {
        if (parent.left == target) {
          parent.left = child;
        } else {
          parent.right = child;
        }
      }
    }
  };
}
