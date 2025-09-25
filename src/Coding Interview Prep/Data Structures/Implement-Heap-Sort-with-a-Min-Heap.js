/**

Implement Heap Sort with a Min Heap

Now that we can add and remove elements let's see some of the applications heaps can be used for. Heaps are commonly used to implement priority queues because they always store an item of greatest or least value in first position. In addition, they are used to implement a sorting algorithm called heap sort. We'll see how to do this here. Heap sort uses a min heap, the reverse of a max heap. A min heap always stores the element of least value in the root position.

Heap sort works by taking an unsorted array, adding each item in the array into a min heap, and then extracting every item out of the min heap into a new array. The min heap structure ensures that the new array will contain the original items in least to greatest order. This is one of the most efficient sorting algorithms with average and worst case performance of O(nlog(n)).

Let's implement heap sort with a min heap. Feel free to adapt your max heap code here. Create an object MinHeap with insert, remove, and sort methods. The sort method should return an array of all the elements in the min heap sorted from smallest to largest.

*/

function isSorted(a) {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
      return false;
    }
  }
  return true;
}
function createRandomArray(size = 5) {
  let a = new Array(size);
  for (let i = 0; i < size; i++) {
    a[i] = Math.floor(Math.random() * 100);
  }
  return a;
}
const array = createRandomArray(25);
var MinHeap = function () {
  this.heap = [null];
  this.insert = (element) => {
    this.heap.push(element);
    let heap = this.heap;
    function maxHeap(index) {
      let parent = Math.floor(index / 2);
      if (element < heap[parent] && index > 1) {
        [heap[index], heap[parent]] = [heap[parent], heap[index]];
        maxHeap(parent);
      }
    }
    maxHeap(this.heap.length - 1);
  };
  this.remove = () => {
    let arr = [...this.heap];
    let max = arr.splice(1, 1);
    this.heap = [null];
    for (let i = 1; i < arr.length; i++) {
      this.insert(arr[i]);
    }
    return max[0];
  };
  this.sort = (heap = this.heap) => {
    let arr = [];
    for (let i = 0; i < heap.length; i++) {
      arr.push(this.remove());
    }
    return arr;
  };
  // Only change code above this line
};
