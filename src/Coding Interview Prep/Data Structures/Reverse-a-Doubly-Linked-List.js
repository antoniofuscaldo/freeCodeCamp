/**

Reverse a Doubly Linked List

Let's create one more method for our doubly linked list called reverse which reverses the list in place. Once the method is executed the head should point to the previous tail and the tail should point to the previous head. Now, if we traverse the list from head to tail we should meet the nodes in a reverse order compared to the original list. Trying to reverse an empty list should return null.

*/

var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.reverse = function () {
    if (!this.head) return null;
    let current = this.head;
    let temp = null;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  };
};
