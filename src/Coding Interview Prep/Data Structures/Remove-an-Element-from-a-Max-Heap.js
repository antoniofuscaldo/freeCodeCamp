/** 

Remove an Element from a Max Heap

Now that we can add elements to our heap let's see how we can remove elements. Removing and inserting elements both require similar logic. In a max heap you will usually want to remove the greatest value, so this involves simply extracting it from the root of our tree. This will break the heap property of our tree, so we must reestablish it in some way. Typically, for a max heap this is done in the following way:

1. Move the last element in the heap into the root position.

2. If either child of the root is greater than it, swap the root with the child of greater value.

3. Continue swapping until the parent is greater than both children or you reach the last level in the tree.

Instructions: Add a method to our max heap called remove. This method should return the greatest value that has been added to our max heap and remove it from the heap. It should also reorder the heap so the heap property is maintained. After removing an element, the next greatest element remaining in the heap should become the root.

*/

const MaxHeap = function () {
  this.heap = [];

  this.parent = (index) => {
    return Math.floor((index - 1) / 2);
  };

  this.leftChild = (index) => {
    return 2 * index + 1;
  };

  this.rightChild = (index) => {
    return 2 * index + 2;
  };

  this.insert = (element) => {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  };

  this.heapifyUp = (index) => {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex);

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  };

  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  };

  this.print = () => {
    return this.heap;
  };

  // Only change code below this line
  this.remove = () => {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop(); // move last element to root
    this.heapifyDown(0);
    return max;
  };

  this.heapifyDown = (index) => {
    let largest = index;
    let left = this.leftChild(index);
    let right = this.rightChild(index);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  };
  // Only change code above this line
};
