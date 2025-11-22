/**

Create a Doubly Linked List

All of the linked lists we've created so far are singly linked lists. Here, we'll create a doubly linked list. As the name implies, nodes in a doubly linked list have references to the next and previous node in the list.

This allows us to traverse the list in both directions but it also requires more memory to be used because every node must contain an additional reference to the previous node in the list.

We've provided a Node object and started our DoublyLinkedList. Let's add two methods to our doubly linked list called add and remove. The add method should add the given element to the list while the remove method should remove all occurrences of a given element in the list.

Be careful to handle any possible edge cases when writing these methods, such as deletions for the first or last element. Also, removing any item on an empty list should return null.

*/

const Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  },
  DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.add = function (data) {
      const newNode = new Node(data, this.tail);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    };
    this.remove = function (data) {
      if (!this.head) return null;
      let current = this.head;
      while (current) {
        if (current.data === data) {
          if (current === this.head) {
            this.head = current.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
          } else if (current === this.tail) {
            this.tail = current.prev;
            this.tail.next = null;
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
        }
        current = current.next;
      }
    };
  };
