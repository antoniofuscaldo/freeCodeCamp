/**

Perform an Intersection on Two Sets of Data

In this exercise we are going to perform an intersection on 2 sets of data. We will create a method on our Set data structure called intersection. An intersection of sets represents all values that are common to two or more sets. This method should take another Set as an argument and return the intersection of the two sets.

For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the intersection of setA and setB is: setA.intersection(setB) = ['a', 'b'].

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
}
