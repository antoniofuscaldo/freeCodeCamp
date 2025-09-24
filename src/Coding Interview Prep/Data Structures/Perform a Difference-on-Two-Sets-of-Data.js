/**

Perform a Difference on Two Sets of Data

In this exercise we are going to perform a difference on 2 sets of data. We will create a method on our Set data structure called difference. A difference of sets should compare two sets and return the items present in the first set that are absent in the second. This method should take another Set as an argument and return the difference of the two sets.

For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the difference of setA and setB is: setA.difference(setB) = ['c'].

*/

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  values() {
    return Object.keys(this.dictionary);
  }
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }
    return false;
  }
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }
    return false;
  }
  size() {
    return this.length;
  }
  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      newSet.add(value);
    });
    set.values().forEach((value) => {
      newSet.add(value);
    });
    return newSet;
  }
  intersection(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      if (set.has(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }
  difference(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      if (!set.has(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }
}
