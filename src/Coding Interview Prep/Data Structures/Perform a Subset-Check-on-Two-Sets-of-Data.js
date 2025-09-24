/**

Perform a Subset Check on Two Sets of Data

In this exercise, we are going to perform a subset test on 2 sets of data. We will create a method on our Set data structure called isSubsetOf. This will compare the first set against the second, and if the first set is fully contained within the second, it will return true.

For example, if setA = ['a','b'] and setB = ['a','b','c','d'], then setA is a subset of setB, so setA.isSubsetOf(setB) should return true.

*/

class Set {
  constructor() {
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
  isSubsetOf(set) {
    return this.values().every((value) => set.has(value));
  }
}
